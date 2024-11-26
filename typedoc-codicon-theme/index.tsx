import {
	Application, DeclarationReference, DefaultTheme, DefaultThemeRenderContext,
	JSX, PageEvent, ReferenceType, Reflection, ReflectionKind, Renderer, RendererEvent, Type
} from "typedoc";
import { Parser as HtmlToReactParser } from 'html-to-react';
import { dirname, join } from 'path';
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'fs';

// Externals packages that will be redirected to Android Docs.
export const ANDROID_EXTERNALS = new RegExp(`^(${
	["android", "androidx", "dalvik", "java", "javax", "org"].join("|")
})(\/|\.|$)`);

const INLINE_REFLECTION_KINDS = [ReflectionKind.TypeAlias, ReflectionKind.Function, ReflectionKind.Variable];

class CodiconTheme extends DefaultTheme {
	constructor(private renderer: Renderer) {
		super(renderer);
		this.overrideIcons();
		this.overrideTemplateMappings();
		this.owner.on(RendererEvent.END, event => {
			if (this.owner.theme instanceof CodiconTheme) {
				const declaration = join(__dirname, "..", "..", "declarations", "core-engine.d.ts");
				if (!existsSync(declaration)) {
					console.warn("typedoc-codicon: Declaration could not be found, ignoring it!");
				}
				const output = join(event.outputDirectory, "core-engine.d.ts");
				mkdirSync(dirname(output), { recursive: true });
				copyFileSync(declaration, output);
			}
		})
	}

	private _icons: typeof this.icons = this.icons;

	private createJsxFromReactElement(element: any, props?: object | null): JSX.Element | null {
		if (element == null) {
			return null;
		}
		const children = Array.isArray(element.props.children)
			? [...element.props.children].map(child => this.createJsxFromReactElement(child))
			: this.createJsxFromReactElement(element.props.children);
		return JSX.createElement(element.type, {
			...element.props,
			...props,
			$$typeof: undefined,
			children: undefined
		}, children);
	}

	private _htmlToReactParser = HtmlToReactParser();

	private readCodiconFromFile(key: string, color?: string | null, props?: object | null): JSX.Element | null {
		const codiconFile = join(__dirname, "..", "..", "node_modules", "@vscode", "codicons", "src", "icons", key + ".svg");
		if (!existsSync(codiconFile)) {
			console.error("typedoc-codicon: Run `npm install` before running typedoc!");
			return null;
		}
		const codicon = readFileSync(codiconFile, { encoding: "utf-8" });
		const element = this._htmlToReactParser.parse(codicon);
		return this.createJsxFromReactElement(element, {
			color: color ?? "var(--color-icon-text)",
			...props
		});
	}

	private codiconOfKind(key: string, color?: string | null): JSX.Element {
		return this.readCodiconFromFile(key, color, { class: "tsd-kind-icon" }) || <svg />;
	}

	private overrideIcons(): void {
		this.icons = Object.assign(this._icons, {
			[ReflectionKind.Accessor]: () => this.codiconOfKind("symbol-field", "var(--color-ts-accessor)"),
			[ReflectionKind.CallSignature]: () => this.codiconOfKind("symbol-method", "var(--color-ts-function)"),
			[ReflectionKind.Class]: () => this.codiconOfKind("symbol-class", "var(--color-ts-class)"),
			[ReflectionKind.Constructor]: () => this.codiconOfKind("symbol-method", "var(--color-ts-constructor)"),
			[ReflectionKind.ConstructorSignature]: () => this.codiconOfKind("symbol-method", "var(--color-ts-constructor)"),
			[ReflectionKind.Enum]: () => this.codiconOfKind("symbol-enum", "var(--color-ts-enum)"),
			[ReflectionKind.EnumMember]: () => this.codiconOfKind("symbol-enum-member", "var(--color-ts-property)"),
			[ReflectionKind.Function]: () => this.codiconOfKind("symbol-method", "var(--color-ts-function)"),
			[ReflectionKind.GetSignature]: () => this.codiconOfKind("symbol-field", "var(--color-ts-accessor)"),
			[ReflectionKind.IndexSignature]: () => this.codiconOfKind("symbol-property", "var(--color-ts-property)"),
			[ReflectionKind.Interface]: () => this.codiconOfKind("symbol-interface", "var(--color-ts-interface)"),
			[ReflectionKind.Method]: () => this.codiconOfKind("symbol-method", "var(--color-ts-method)"),
			[ReflectionKind.Module]: () => this.codiconOfKind("symbol-structure", "var(--color-ts-namespace)"),
			[ReflectionKind.Namespace]: () => this.codiconOfKind("symbol-namespace", "var(--color-ts-namespace)"),
			[ReflectionKind.Parameter]: () => this.codiconOfKind("symbol-parameter", "var(--color-ts-property)"),
			[ReflectionKind.Project]: () => this.codiconOfKind("package", "var(--color-ts-namespace)"),
			[ReflectionKind.Property]: () => this.codiconOfKind("symbol-property", "var(--color-ts-property)"),
			[ReflectionKind.Reference]: () => this.codiconOfKind("key", "var(--color-ts-reference)"),
			[ReflectionKind.SetSignature]: () => this.codiconOfKind("symbol-field", "var(--color-ts-accessor)"),
			[ReflectionKind.TypeAlias]: () => this.codiconOfKind("type-hierarchy-sub", "var(--color-ts-type-alias)"),
			[ReflectionKind.TypeLiteral]: () => this.codiconOfKind("type-hierarchy-sub", "var(--color-ts-type-alias)"),
			[ReflectionKind.TypeParameter]: () => this.codiconOfKind("type-hierarchy-sub", "var(--color-ts-type-alias)"),
			[ReflectionKind.Variable]: () => this.codiconOfKind("symbol-variable", "var(--color-ts-variable)")
		});
	}

	private overrideTemplateMappings(): void {
		// @ts-expect-error
		const mappings = this.mappings;
		for (let mapping = 0; mapping < mappings.length; mapping++) {
			let kinds = mappings[mapping].kind;
			for (let kind = 0; kind < kinds.length; kind++) {
				if (INLINE_REFLECTION_KINDS.includes(kinds[kind])) {
					kinds.splice(kind--, 1);
				}
			}
			if (kinds.length == 0) {
				mappings.splice(mapping--, 1);
			}
		}
	}

	override getRenderContext(pageEvent: PageEvent<Reflection>): DefaultThemeRenderContext {
		return new CodiconThemeRenderContext(this, pageEvent, this.application.options);
	}
}

class CodiconThemeRenderContext extends DefaultThemeRenderContext {
	private _header = this.header;
	// Exclude homepage title duplication (actually, triplication).
	override header: (props: PageEvent<Reflection>) => JSX.Element = (props) => (
		<>{!props.model.isProject() && this._header(props)}</>
	);

	override footer: () => JSX.Element = () => (
		<div class="container tsd-generator">
			<p>
				{`Copyright © ${new Date().getFullYear()} Nernar. Copyright © 2020 #mineprogramming. Built with \u2764 and `}
				<a href="https://typedoc.org/" target="_blank">
					TypeDoc
				</a>
				{"."}
			</p>
		</div>
	);

	private _typeAndParent = this.typeAndParent;
	// Just a little stuff appears in ordinal {@link}'s, modifiers (Inherits, Extends, etc.)
	// not being redirected to external links by default.
	override typeAndParent: (props: Type) => JSX.Element = (props) => {
		if (props instanceof ReferenceType && props.reflection) {
			return this._typeAndParent(props);
		}
		let caption = props.toString();
		if (ANDROID_EXTERNALS.test(caption)) {
			const index = caption.lastIndexOf(".");
			if (index != -1) {
				caption = `${caption.substring(0, index)}#${caption.substring(index + 1)}`;
			}
			return <a href={`https://developer.android.com/reference/${caption.replace(/\./g, "/")}`} class="external" target="_blank">{caption}</a>;
		}
		return this._typeAndParent(props);
	};
}

export function load(app: Application): void {
	app.renderer.defineTheme("typedoc-codicon", CodiconTheme);
	app.converter.addUnknownSymbolResolver((ref: DeclarationReference) => {
        // If someone did {@link lodash!}, link them directly to the home page.
        if (!ref.symbolReference) {
            return "https://lodash.com/";
        }

        if (!ref.symbolReference.path) {
            // Someone included a meaning, but not a path.
            // https://typedoc.org/guides/declaration-references/#meaning
            return;
        }

        if (ref.symbolReference.path.length) {
            const caption = ref.symbolReference.path.map((component) => component.path).join(".");
            if (ANDROID_EXTERNALS.test(caption)) {
                return {
					caption: caption,
					target: `https://developer.android.com/reference/${caption.replace(/\./g, "/")}`
				};
            }
        }
    });
}

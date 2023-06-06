import { Application, DeclarationReference, DefaultTheme, DefaultThemeRenderContext, JSX, Options, PageEvent, ReferenceType, Reflection, ReflectionKind, RenderTemplate, Renderer, RendererEvent, Type } from "typedoc";

import { dirname, join } from 'path';
import { copyFileSync, existsSync, mkdirSync } from 'fs';

// Externals packages that will be redirected to Android Docs.
export const EXTERNALS = new RegExp(`^(${
	["android", "androidx", "dalvik", "java", "javax", "org"].join("|")
})(\/|\.|$)`);

class CodiconThemeContext extends DefaultThemeRenderContext {
	constructor(theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
		super(theme, page, options);
		this.icons = Object.assign({}, this.icons);
		this.icons[ReflectionKind.Accessor] = () => this.codiconOfKind("symbol-field", "#FF4D4D");
		this.icons[ReflectionKind.Class] = () => this.codiconOfKind("symbol-class", "var(--color-ts-class)");
		this.icons[ReflectionKind.Constructor] = () => this.codiconOfKind("symbol-method", "#4D7FFF");
		this.icons[ReflectionKind.Enum] = () => this.codiconOfKind("symbol-enum", "var(--color-ts-enum)");
		this.icons[ReflectionKind.EnumMember] = () => this.codiconOfKind("symbol-enum-member", "#FF984D");
		this.icons[ReflectionKind.Function] = () => this.codiconOfKind("symbol-method", "var(--color-ts-function)");
		this.icons[ReflectionKind.Interface] = () => this.codiconOfKind("symbol-interface", "var(--color-ts-interface)");
		this.icons[ReflectionKind.Method] = () => this.codiconOfKind("symbol-method", "#FF4DB8");
		this.icons[ReflectionKind.Module] = () => this.codiconOfKind("symbol-structure", "var(--color-ts-namespace)");
		this.icons[ReflectionKind.Namespace] = () => this.codiconOfKind("symbol-namespace", "var(--color-ts-namespace)");
		this.icons[ReflectionKind.Parameter] = () => this.codiconOfKind("symbol-parameter", "#FF984D");
		this.icons[ReflectionKind.Project] = () => this.codiconOfKind("package", "var(--color-ts-namespace)");
		this.icons[ReflectionKind.Property] = () => this.codiconOfKind("symbol-property", "#FF984D");
		this.icons[ReflectionKind.Reference] = () => this.codiconOfKind("key", "#FF4D82");
		this.icons[ReflectionKind.TypeAlias] = () => this.codiconOfKind("type-hierarchy-sub", "var(--color-ts-type-alias)");
		this.icons[ReflectionKind.Variable] = () => this.codiconOfKind("symbol-variable", "var(--color-ts-variable)");
		this.icons["menu"] = () => this.codicon("menu", 16);
		this.icons["search"] = () => this.codicon("search", 16);
	}

	private codiconOfKind(key: string, color: string | undefined) {
		return this.codicon(key, 16, "tsd-kind-icon", color);
	}

	private codicon(key: string, size: number | undefined = undefined, kind: string | undefined = undefined, color: string | undefined = "var(--color-text)"): JSX.Element {
		let attrs = [];
		size != undefined && attrs.push(`font-size:${size}px`);
		color != undefined && attrs.push(`color:${color}`); // 0.24.4+
		return (
			<div
				class={`codicon codicon-${key}` + (kind != undefined ? ` ${kind}` : "")}
				style={attrs.join(";")}
			/>
		);
	}

	private _header = this.header;
	// Exclude homepage title duplication (exactly, treplication).
	override header: (props: PageEvent<Reflection>) => JSX.Element = (props) => (
		<>{!props.model.isProject() && this._header(props)}</>
	);

	override footer: () => JSX.Element = () => (
		<div class="container tsd-generator">
			<p>
				{`Copyright © ${new Date().getFullYear()} Nernar. Built with \u2764 and `}
				<a href="https://typedoc.org/" target="_blank">
					TypeDoc
				</a>
				{"."}
			</p>
		</div>
	);

	private _typeAndParent = this.typeAndParent;
	// Just a little stuff appears in ordinal {@link}'s, modifiers (Inherits, Extends, etc.)
	// not redirected to external links by default.
	override typeAndParent: (props: Type) => JSX.Element = (props) => {
		if (props instanceof ReferenceType && props.reflection) {
			return this._typeAndParent(props);
		}
		let caption = props.toString();
		if (EXTERNALS.test(caption)) {
			const index = caption.lastIndexOf(".");
			if (index != -1) {
				caption = `${caption.substring(0, index)}#${caption.substring(index + 1)}`;
			}
			return <a href={`https://developer.android.com/reference/${caption.replace(/\./g, "/")}`} class="external" target="_blank">{caption}</a>;
		}
		return this._typeAndParent(props);
	};
}

function copySync(input: string, dest: string, path: string) {
	mkdirSync(join(dest, dirname(path)), { recursive: true });
	copyFileSync(join(input, path), join(dest, path));
}

class CodiconTheme extends DefaultTheme {
	constructor(private renderer: Renderer) {
		super(renderer);
		this.listenTo(renderer, RendererEvent.BEGIN, (event: RendererEvent) => {
			const codicon = join(__dirname, "..", "..", "node_modules", "@vscode", "codicons", "dist");
			if (!existsSync(codicon))
			{
				console.error("Run `npm install` before running building!");
				return;
			}
			const assets = join(event.outputDirectory, "assets");
			copySync(codicon, assets, "codicon.css");
			copySync(codicon, assets, "codicon.ttf");
		});
	}

	private renderContext?: CodiconThemeContext;

	override getRenderContext(pageEvent: PageEvent<Reflection>): DefaultThemeRenderContext {
		return this.renderContext ||= new CodiconThemeContext(this, pageEvent, this.application.options);
	}

	override render(page: PageEvent<Reflection>, template: RenderTemplate<PageEvent<Reflection>>): string {
		this.renderer.hooks.once("head.end", (context) => (
			<link rel="stylesheet" href={context.relativeURL("assets/codicon.css")} />
		));
		return super.render(page, template);
	}
}

export function load(app: Application) {
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
            if (EXTERNALS.test(caption)) {
                return {
					caption: caption,
					target: `https://developer.android.com/reference/${caption.replace(/\./g, "/")}`
				};
            }
        }
    });
}

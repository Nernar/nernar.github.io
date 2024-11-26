import {
	Application, DeclarationReference
} from 'typedoc';

// Externals packages that will be redirected to Android Docs.
export const ANDROID_EXTERNALS = ["android", "androidx", "dalvik", "java", "javax"];

export function load(app: Application): void {
	app.converter.addUnknownSymbolResolver((ref: DeclarationReference) => {
		// If someone did {@link lodash!}, link them directly to the home page.
		if (!ref.symbolReference) {
			return "https://lodash.com/";
		}

		if (!ref.symbolReference.path || ref.symbolReference.path.length == 0) {
			// Someone included a meaning, but not a path.
			// https://typedoc.org/guides/declaration-references/#meaning
			return;
		}

		if (ANDROID_EXTERNALS.includes(ref.symbolReference.path[0].path)) {
			const caption = ref.symbolReference.path.map((component) => component.path).join(".");
			return {
				caption,
				target: `https://developer.android.com/reference/${caption.replace(/\./g, "/")}`
			};
		}
	});
}

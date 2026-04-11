import { usePluginData } from "@docusaurus/useGlobalData";
import { GlobalVersion, useDocsVersion } from '@docusaurus/plugin-content-docs/client';

export interface TypedocPluginData {
	path: string;
	versions: GlobalVersion[];
	breadcrumbs: boolean;
}

export function useTypedocPluginData(pluginId?: string): TypedocPluginData {
	if (!pluginId) {
		pluginId = useDocsVersion().pluginId;
	}
	return usePluginData('@nernar/docusaurus-plugin-typedoc', pluginId) as TypedocPluginData;
}

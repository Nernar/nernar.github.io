import { GlobalVersion } from "@docusaurus/plugin-content-docs/client";
import { TypedocPluginData, useTypedocPluginData } from "./useTypedocData";

export const getLatestVersion = (data: TypedocPluginData): GlobalVersion =>
	data.versions.find((version) => version.isLast)!;

export function useTypedocPreferredVersion(pluginId?: string): GlobalVersion {
	const pluginData = useTypedocPluginData(pluginId);
	return getLatestVersion(pluginData);
}

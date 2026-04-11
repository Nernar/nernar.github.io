import Link from '@docusaurus/Link';
import { useDocsVersion } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useTypedocPreferredVersion } from '../hooks/useTypedocPreferredVersion';

export function VersionBanner(): React.JSX.Element | null {
	const { banner, docs, pluginId, version } = useDocsVersion();
	const latestVersion = useTypedocPreferredVersion(pluginId);

	if (!banner || !latestVersion) {
		return null;
	}

	const latestVersionInfo = docs[latestVersion.label];

	return (
		<div
			className={`${ThemeClassNames.docs.docVersionBanner} alert alert--warning margin-bottom--md`}
			role="alert"
		>
			<div>
				{banner === 'unreleased' && <>This is documentation for an unreleased version.</>}
				{banner === 'unmaintained' && (
					<>
						This is documentation for version <b>{version}</b>.
					</>
				)}{' '}
				For the latest API, see version{' '}
				<b>
					<Link to={latestVersionInfo.id}>
						{latestVersionInfo.title}
					</Link>
				</b>
				.
			</div>
		</div>
	);
}

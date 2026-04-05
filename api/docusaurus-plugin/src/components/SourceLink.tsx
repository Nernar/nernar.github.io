import type { JSONOutput } from 'typedoc';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useGitRefName } from '../hooks/useGitRefName';

function replaceWithSrc(url: string): string {
	// Always link the source file
	return url.replace(/\/(dts|dist|lib|build|es|esm|cjs|mjs)\//, '/src/');
}

function isExternalSource(fileName: string): boolean {
	return fileName.includes('node_modules') || fileName.includes('declarations') || fileName.includes('android.d.ts');
}

export interface SourceLinkProps {
	sources?: JSONOutput.SourceReference[];
}

export function SourceLink({ sources = [] }: SourceLinkProps) {
	const { siteConfig } = useDocusaurusContext();
	const gitRefName = useGitRefName();

	if (sources.length === 0) {
		return null;
	}

	const githubHost = (siteConfig.customFields?.githubHost as string) ?? 'github.com';
	const githubRepository = `https://${githubHost}/${siteConfig.organizationName}/${siteConfig.projectName}`;

	return (
		<>
			{sources.slice(0, 3).map((source) => {
				if (isExternalSource(source.fileName)) {
					return null;
				}

				return (
					<a
						key={source.fileName}
						className="tsd-anchor"
						href={
							source.url ||
							`${githubRepository}/blob/${gitRefName}/${replaceWithSrc(source.fileName)}#L${source.line}`
						}
						rel="noreferrer"
						target="_blank"
					>
						<i className="codicon codicon-file-code" />
					</a>
				);
			})}
		</>
	);
}

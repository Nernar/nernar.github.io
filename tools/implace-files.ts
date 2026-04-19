import { cpSync, globSync, mkdirSync, rmSync, statSync } from 'fs';
import { join, basename } from 'path';
import { createCommand } from 'commander';

export interface implaceFilesOptions {
	output: string;
	files: Array<string>;
	pattern?: string;
}

export function implaceFiles({ output, files, pattern }: implaceFilesOptions) {
	rmSync(output, { recursive: true, force: true });
	mkdirSync(output, { recursive: true });

	for (const input of files) {
		if (statSync(input).isDirectory()) {
			const inputFiles = globSync(pattern || "**/*", { cwd: input });
			for (const relativePath of inputFiles) {
				cpSync(join(input, relativePath), join(output, relativePath));
			}
		} else {
			cpSync(input, join(output, basename(input)));
		}
	}

	const outputFiles = globSync(pattern || "**/*", { cwd: output });
	console.info(`Implaced ${outputFiles.length} files from ${files.length} sources into ${JSON.stringify(output)}!`);
}

createCommand('implace-files')
	.requiredOption("-o, --output <relativeDirectory>", "sets files output directory")
	.option("-p, --pattern [regex]", "sets regex to being searched in directories")
	.argument("<files...>")
	.action((files: string[], options: implaceFilesOptions) => implaceFiles({ files, ...options }))
	.parse(process.argv);

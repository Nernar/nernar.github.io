/*

    Inner Core API: Core Engine API Reference
    Copyright (C) 2022  Nernar (https://github.com/nernar)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

	Maintained and distributed by MaXFeeD (maxfeed.nernar@outlook.com)

*/

import { dirname, join } from 'path';
import { sync as glob } from 'glob';
import { readFile, writeFile } from 'fs/promises';
import * as readline from 'readline';
import * as events from 'events';
import * as fs from 'fs';

async function resolveModernExport(path: fs.PathLike) {
	const rl = readline.createInterface({
		input: fs.createReadStream(path),
		crlfDelay: Infinity
	});
	let content = '';
	rl.on('line', line => {
		let trimmed = line.trimStart();
		if (trimmed.startsWith('declare ')) {
			let index = line.length - trimmed.length;
			if (trimmed.startsWith('declare var ')) {
				line = line.replace('var', 'const');
			}
			content += line.substring(0, index) + 'export ' + line.substring(index);
		} else {
			content += line;
		}
		content += '\n';
	});
	await events.once(rl, 'close');
	return content;
}

const { textToKeywordObj } = require('typescript');

const KEYWORD_REGEXP = new RegExp('^(' + Object.keys(textToKeywordObj).join('|') + ')$');

function resolveDeclarationAlias(line: string) {
	return line.split(' ')
		.filter(value => !KEYWORD_REGEXP.test(value))
		.join(' ')
		.trimStart()
		.split(/[^_a-zA-Z0-9$]/, 1)[0];
}

async function rewriteModernExport(input: fs.PathLike, output: fs.PathLike) {
	const rl = readline.createInterface({
		input: fs.createReadStream(input),
		crlfDelay: Infinity
	});
	let exports: string[] = [];
	let content = '';
	rl.on('line', line => {
		let trimmed = line.trimStart();
		if (trimmed.length == 0) {
			return;
		}
		if (trimmed.startsWith('declare ')) {
			let index = line.length - trimmed.length;
			if (trimmed.startsWith('declare var ')) {
				line = line.replace('var', 'const');
			}
			content += line.substring(0, index) + 'export ' + line.substring(index);
			const alias = resolveDeclarationAlias(trimmed);
			exports.includes(alias) || alias.length > 0 && exports.push(alias);
		} else if (/^[a-zA-Z]/.test(line)) {
			if (line.startsWith('var ')) {
				line = line.replace('var', 'const');
			}
			content += 'export ' + line;
			const alias = resolveDeclarationAlias(line);
			exports.includes(alias) || alias.length > 0 && exports.push(alias);
		} else {
			content += line;
		}
		content += '\n';
	});
	await events.once(rl, 'close');
	fs.mkdirSync(dirname(output.toString()), { recursive: true });
	await writeFile(output, content);
	return exports;
}

export async function flushDeclarations(folder: string) {
	const typesExtractor = join(__dirname, '..', 'declarations', `api-extractor.${ folder }.json`);
	const declarations = glob(
		'*.d.ts', { cwd: join(__dirname, '..', folder) }
	);
	let exportByModule: { [input: string]: string[] } = {
		'packages.d.ts': ['com']
	};
	let packagesContent = '';
	for (const input of glob(
		'com/zhekasmirnov/**/*.d.ts', { cwd: join(__dirname, '..', folder) }
	).concat(declarations)) {
		const path = join(__dirname, '..', folder, input);
		declarations.includes(input)
			? (exportByModule[input] = await rewriteModernExport(
				path, join(__dirname, '..', folder + '-es6', input)
			))
			: (packagesContent += await resolveModernExport(path));
	}
	declarations.push('packages.d.ts') && declarations.sort();
	await writeFile(join(__dirname, '..', folder + '-es6', 'packages.d.ts'), packagesContent);
	for (const input of declarations) {
		let imports = Object.keys(exportByModule)
			.filter(value => value != input && exportByModule[value].length > 0)
			.map(value => `import { ${ exportByModule[value].join(', ') } } from './${ value.substring(0, value.length - 5) }'\n`)
			.join('');
		const path = join(__dirname, '..', folder + '-es6', input);
		if (input == 'packages.d.ts') imports = '/// <reference path=\'../declarations/android.d.ts\' />\n' + imports;
		await writeFile(path, imports + await readFile(path, 'utf-8'));
	}
	await writeFile(
		join(__dirname, '..', folder + '-es6', 'index.d.ts'),
		declarations.map(value => `export * from './${ value.substring(0, value.length - 5) }'\n`)
	);
	await writeFile(typesExtractor, `{
	"extends": "../api-extractor.json",
	"mainEntryPointFilePath": "../${ folder }-es6/index.d.ts"
}
`);
}

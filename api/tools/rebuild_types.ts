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

import { join } from 'path';
import { sync as glob } from 'glob';
import { writeFile } from 'fs/promises';
import * as readline from 'readline';
import * as events from 'events';
import * as fs from 'fs';

async function trimDeclaration(path: fs.PathLike) {
	const rl = readline.createInterface({
		input: fs.createReadStream(path),
		crlfDelay: Infinity
	});
	let content = '';
	rl.on('line', line => {
		line = line.trimEnd();
		if (line.length != 0) {
			content += line + '\n';
		}
	});
	await events.once(rl, 'close');
	return content;
}

const types = join(__dirname, '..', 'declarations');
const typesRollup = join(types, `${ process.argv[2] }.d.ts`);
const declarations = join(__dirname, '..', process.argv[2]);

(async (now) => {
	let content = `\
/**
* @packageDocumentation
* Core Engine is the most fashion Minecraft: Bedrock Edition
* engine determined to make game modded with minimum tons of code.
*/
/// <reference path='./android.d.ts' />
`;
	for (const input of glob(
		'com/zhekasmirnov/**/*.d.ts', { cwd: declarations }
	).concat(glob(
		'*.d.ts', { cwd: declarations }
	))) {
		content += await trimDeclaration(join(declarations, input));
	}
	await writeFile(typesRollup, content);
	console.log(`Merging declarations of ${ process.argv[2] } successfully completed in ${ Math.floor((Date.now() - now) / 100) / 10 }s`);
})(Date.now());

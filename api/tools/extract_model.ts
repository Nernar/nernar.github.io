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

import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';
import { resolve } from 'path';

const configObjectFullPath = resolve(__dirname, '..', 'api-extractor.json');
const packageJsonFullPath = resolve(__dirname, '..', 'package.json');

(async () => {
	const configObject = ExtractorConfig.loadFile(configObjectFullPath);
	configObject.mainEntryPointFilePath = `<projectFolder>/declarations/${ process.argv[2] }.es6.d.ts`;

	const now = Date.now();
	const config = ExtractorConfig.prepare({
		configObjectFullPath,
		configObject,
		packageJsonFullPath,
		packageJson: {
			name: process.argv[2]
		}
	});
	const result = Extractor.invoke(config, {
		localBuild: process.argv.includes('--local'),
		showDiagnostics: process.argv.includes('--diagnostics')
	});
	if (result.errorCount == 0) {
		console.info(`Extraction of ${ process.argv[2] } successfully completed in ${ Math.floor((Date.now() - now) / 100) / 10 }s`);
	}
})();

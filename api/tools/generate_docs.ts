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

import { DocumenterConfig } from '@microsoft/api-documenter/lib/documenters/DocumenterConfig';
import { join, normalize } from 'path';

import { AbsoluteApiModel } from './extractor-model/AbsoluteApiModel';
import { DocusaurusMarkdownDocumenter } from './markdown/DocusaurusMarkdownDocumenter';

(async () => {
	const apiModel = new AbsoluteApiModel(['android', 'androidx', 'dalvik', 'java', 'javax', 'org']);
	apiModel.loadPackage(join(__dirname, '..', 'temp', `${ process.argv[2] }.api.json`));

    const output = process.argv[3] || join('www', process.argv[2]);
	const documenter = new DocusaurusMarkdownDocumenter({
		apiModel: apiModel,
		documenterConfig: DocumenterConfig.loadFile(join(__dirname, '..', 'api-documenter.json')),
        routeBasePath: normalize('/' + output.replace('www', 'api') + '/').replace(/\\/gi, '/'),
		outputFolder: join(__dirname, '..', output)
	});
	documenter.generateFiles();
})();

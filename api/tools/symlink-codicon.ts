/*

    Inner Core API: Core Engine API Reference
    Copyright (C) 2023  Nernar (https://github.com/nernar)

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
import { existsSync } from 'fs';
import { symlink, mkdir } from 'fs/promises';

(async () => {
    const website = join(__dirname, '..', 'www');
    const codicon = join(website, 'codicons');
    if (!existsSync(codicon))
    {
        const target = join(__dirname, '..', 'node_modules', '@vscode', 'codicons', 'src', 'icons');
        if (!existsSync(target))
        {
            console.error("Run `npm install` before running symlinking!");
            return;
        }
        await mkdir(website, { recursive: true });
        await symlink(target, codicon, 'dir');
        console.info("Successfully symlinked 'codicons'!");
    }
})();

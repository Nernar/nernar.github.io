/*

    Inner Core Docs: Inner Core, Core Engine and Horizon documentation
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
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
	librariesSidebar: [
		'BackpackAPI',
		'BetterFoliage',
		'BowLib',
		'ClassicUI',
		'CoreUtility',
		{
			type: 'category',
			label: 'Dungeon Utility',
			link: {
				type: 'doc',
				id: 'DungeonUtility/readme'
			},
			items: [
				'DungeonUtility/structure-formats',
				'DungeonUtility/structure-loader',
				'DungeonUtility/structure-piece',
				'DungeonUtility/item-generation'
			]
		},
		'FtbQuests',
		'InfiniteDepth',
		'Inventory',
		{
			type: 'category',
			label: 'Kernel Extension',
			link: {
				type: 'doc',
				id: 'KernelExtension/readme'
			},
			items: [
				'KernelExtension/blocks-and-items-in-java',
				'KernelExtension/kex-config',
				'KernelExtension/json-models',
				'KernelExtension/custom-block-entities'
			]
		},
		'RecipeViewer',
		'Timer',
		'Translate',
		'TreeCapitator',
		'VeinMiner'
	]
};

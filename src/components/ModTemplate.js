// @ts-check
import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { zipSync, strToU8 } from 'fflate';

function downloadBlob(data, fileName, mimeType) {
	var blob = new Blob([data], { type: mimeType });
	var url = window.URL.createObjectURL(blob);
	var a = document.createElement('a');
	a.href = url;
	a.download = fileName;
	document.body.appendChild(a);
	a.style.display = 'none';
	a.click();
	setTimeout(() => window.URL.revokeObjectURL(url), 40000);
	document.body.removeChild(a);
}

function loadUpscaledIcon(blob, then) {
	var canvas = document.createElement('canvas');
	canvas.width = canvas.height = 192;
	var context = canvas.getContext('2d');
	if (context == null) {
		console.error('context == null');
		return;
	}
	context.imageSmoothingEnabled = false;
	// @ts-ignore
	context.webkitImageSmoothingEnabled = false;
	// @ts-ignore
	context.mozImageSmoothingEnabled = false;
	// @ts-ignore
	context.msImageSmoothingEnabled = false;
	// @ts-ignore
	context.oImageSmoothingEnabled = false;
	var url = window.URL.createObjectURL(blob);
	var img = document.createElement('img');
	img.onload = function(event) {
		if (context == null) {
			console.error('context == null');
			return;
		}
		if (img.width == img.height) {
			context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
		} else {
			var offset = Math.max(img.width, img.height) - Math.min(img.width, img.height);
			if (img.width > img.height) {
				context.drawImage(img, Math.round(offset / 2), 0, img.width - offset, img.height, 0, 0, canvas.width, canvas.height);
			} else {
				context.drawImage(img, 0, Math.round(offset / 2), img.width, img.height - offset, 0, 0, canvas.width, canvas.height);
			}
		}
		canvas.toBlob(async (blob) => blob && then(await blob.arrayBuffer()), 'image/png', 1);
		window.URL.revokeObjectURL(url);
		img.remove();
	};
	img.src = url;
}

function downloadTemplate(name, author, version, description, clientOnly, iconData) {
	if (name.length == 0 || name.trim() == '') {
		name = 'Mod';
	}
	if (author.length == 0 || author.trim() == '') {
		author = 'Inner Core Mods';
	}
	if (version.length == 0 || version.trim() == '') {
		version = '1.0';
	}
	var files = {
		'.dex': {
			'sources.json': strToU8('{\n  \n}')
		},
		'assets': {
			'resources': {
				'items-opaque': {},
				'particle-atlas': {},
				'terrain-atlas': {}
			},
			'gui': {}
		},
		'dev': {
			'.includes': strToU8('# Learn more: https://nernar.github.io/docs/basics/building-script#includes\n/.')
		},
		'build.config': strToU8(JSON.stringify({
			defaultConfig: {
				api: 'CoreEngine',
				buildType: 'develop'
			},
			buildDirs: [
				{
					dir: 'dev/',
					targetSource: 'main.js'
				}
			],
			compile: [
				{
					path: 'launcher.js',
					sourceType: 'launcher'
				},
				{
					path: 'main.js',
					sourceType: 'mod'
				}
			],
			resources: [
				{
					path: 'assets/resources/',
					resourceType: 'resource'
				},
				{
					path: 'assets/gui/',
					resourceType: 'gui'
				}
			],
			javaDirs: [],
			nativeDirs: []
		}, null, 2)),
		'config.json': strToU8(JSON.stringify({
			enabled: false
		}, null, 2)),
		'launcher.js': strToU8('ConfigureMultiplayer({\n\tisClientOnly: ' + clientOnly + '\n});\nLaunch();'),
		'mod.info': strToU8(JSON.stringify({
			name,
			author,
			version,
			description
		}, null, '\t'))
	};
	if (iconData) {
		files['mod_icon.png'] = [iconData, { level: 0 }];
	}
	downloadBlob(zipSync(files, {
		comment: 'Packed via Inner Core Docs with fflate.'
	}), name.replace(/[^\p{L}\p{N}\s_.-]/gui, ' ').replace(/\s+/, ' ').trim() + '.zip', 'application/zip');
}

export default function ModTemplate() {
	var name = '';
	var author = '';
	var version = '';
	var description = '';
	var clientOnly = false;
	var iconData = null;
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='inline-input-with-placeholder'>
				<input type='text' id='name' required={true} onChange={(event) => name = event.target.value} />
				<label htmlFor='name'>Name</label>
			</div>
			<div className='inline-input-with-placeholder'>
				<input type='text' id='author' required={true} onChange={(event) => author = event.target.value} />
				<label htmlFor='author'>Author</label>
			</div>
			<div className='inline-input-with-placeholder'>
				<input type='text' id='version' required={true} onChange={(event) => version = event.target.value} />
				<label htmlFor='version'>Version</label>
			</div>
			<div className='inline-input-with-placeholder'>
				<input type='text' id='description' required={true} onChange={(event) => description = event.target.value} />
				<label htmlFor='description'>Description</label>
			</div>
			<label>
				<input type='checkbox' id='clientOnly' onChange={(event) => clientOnly = event.target.checked} />
				Client Only
			</label>
			<input type='file' id='icon' accept='image/*' onChange={(event) => event.target.files && loadUpscaledIcon(event.target.files[0], (data) => iconData = new Uint8Array(data))} />
			<br/>
			<button type='button' className='button button--primary shadow--lw' onClick={(event) => downloadTemplate(name, author, version, description, clientOnly, iconData)}>Download</button>
		</div>
	);
}

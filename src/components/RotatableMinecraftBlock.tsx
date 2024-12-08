import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function RotatableMinecraftBlock({ textures, bottomTexture, topTexture, northTexture, southTexture, westTexture, eastTexture, floatDirection }) {
	floatDirection || (floatDirection = 'right');
	if (textures == null || textures[0] == null) {
		textures = '/images/blocks/missing_block_0.png';
	}
	if (!Array.isArray(textures)) {
		textures = [textures];
	}

	bottomTexture && (textures[0] = bottomTexture);
	topTexture && (textures[1] = topTexture);
	northTexture && (textures[2] = northTexture);
	southTexture && (textures[3] = southTexture);
	westTexture && (textures[4] = westTexture);
	eastTexture && (textures[5] = eastTexture);

	for (let offset = 0; offset < 6; offset++) {
		if (textures.length <= offset || textures[offset] == null) {
			textures[offset] = textures[offset - 1];
		}
		if (!textures[offset].startsWith('/') && textures[offset].indexOf('://') == -1) {
			textures[offset] = `/images/blocks/${textures[offset]}.png`;
		}
	}

	return (
		<div className='rotatable-minecraft-block-wrapper' style={{ float: floatDirection }}>
			<div className='rotatable-minecraft-block-container'>
				<img className='rotatable-minecraft-block-side-north' alt='back' src={useBaseUrl(textures[2])} />
				<img className='rotatable-minecraft-block-side-west' alt='left' src={useBaseUrl(textures[4])} />
				<img className='rotatable-minecraft-block-side-east' alt='right' src={useBaseUrl(textures[5])} />
				<img className='rotatable-minecraft-block-side-top' alt='top' src={useBaseUrl(textures[1])} />
				<img className='rotatable-minecraft-block-side-bottom' alt='bottom' src={useBaseUrl(textures[0])} />
				<img className='rotatable-minecraft-block-side-south' alt='front' src={useBaseUrl(textures[3])} />
			</div>
		</div>
	);
}

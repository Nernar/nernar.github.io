import { SidepanelButtonProps } from '@docsearch/react/sidepanel';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';

export const ACTION_KEY_DEFAULT = 'Ctrl';
export const ACTION_KEY_APPLE = '⌘';

export function isAppleDevice(): boolean {
	return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

type Props = React.ComponentProps<'button'> & SidepanelButtonProps;

export const RomiButton = ({
	variant = 'floating',
	keyboardShortcuts,
	translations = {},
	...props
}: Props): JSX.Element => {
	const { buttonText = 'Ask AI', buttonAriaLabel = 'Ask AI' } = translations;
	const [key, setKey] = useState<typeof ACTION_KEY_APPLE | typeof ACTION_KEY_DEFAULT | null>(null);

	useEffect(() => {
		if (typeof navigator !== 'undefined') {
			isAppleDevice() ? setKey(ACTION_KEY_APPLE) : setKey(ACTION_KEY_DEFAULT);
		}
	}, []);

	const actionKeyAltText = key === ACTION_KEY_DEFAULT ? 'Control' : 'Meta';
	const isCtrlCmdIEnabled = keyboardShortcuts?.['Ctrl/Cmd+I'] !== false;
	const shortcut = `${actionKeyAltText}+i`;

	return (
		<button
			className={`DocSearch-SidepanelButton ${variant}`}
			type="button"
			aria-label={isCtrlCmdIEnabled ? `${buttonAriaLabel} (${shortcut})` : buttonAriaLabel}
			aria-keyshortcuts={isCtrlCmdIEnabled ? shortcut : undefined}
			{...(variant === 'floating' ? { tabIndex: -1 } : {})}
			{...props}
		>
			<img src={useBaseUrl("/images/mascot/romi-assistant.png")} />
			{variant !== 'floating' && buttonText}
		</button>
	);
};

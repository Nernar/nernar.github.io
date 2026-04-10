import { useEffect, useState } from 'react';

export function useLocalStorageState(key: string, defaultValue: boolean) {
	const [value, setValue] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const stored = localStorage.getItem(key);
		if (stored !== null) {
			setValue(stored === 'true');
		} else {
			setValue(defaultValue);
		}
	}, [key, defaultValue]);

	useEffect(() => {
		if (isMounted) {
			localStorage.setItem(key, String(value));
		}
	}, [key, value, isMounted]);

	return [value, setValue] as const;
}

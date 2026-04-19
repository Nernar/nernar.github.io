import React, { createContext, useContext, useState, useEffect } from 'react';

export interface INbtOptions {
	showInherited: boolean;
	setShowInherited: (val: boolean) => void;
}

export const NbtOptionsContext = createContext<INbtOptions>({
	showInherited: true,
	setShowInherited: () => {},
});

export function useNbtOptions() {
	return useContext(NbtOptionsContext);
}

export const NbtOptionsProvider = ({ children }: { children: React.ReactNode }) => {
	const [showInherited, setShowInherited] = useState(true);

	// Persistence in localStorage like Docusaurus does
	useEffect(() => {
		const saved = localStorage.getItem('nbt-show-inherited');
		if (saved !== null) {
			setShowInherited(saved === 'true');
		}
	}, []);

	const handleSetShowInherited = (val: boolean) => {
		setShowInherited(val);
		localStorage.setItem('nbt-show-inherited', String(val));
	};

	return (
		<NbtOptionsContext.Provider value={{ showInherited, setShowInherited: handleSetShowInherited }}>
			{children}
		</NbtOptionsContext.Provider>
	);
};

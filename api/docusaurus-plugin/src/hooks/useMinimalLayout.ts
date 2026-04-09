import { useContext } from 'react';
import { ApiDataContext } from '../components/ApiDataContext';

export function useMinimalLayout(): boolean {
	const context = useContext(ApiDataContext);
	return context?.options?.minimal ?? false;
}

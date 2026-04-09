import { useContext } from 'react';
import { ApiDataContext } from '../components/ApiDataContext';

export function useBreadcrumbs(): boolean {
	const context = useContext(ApiDataContext);
	return context?.options?.breadcrumbs ?? true;
}

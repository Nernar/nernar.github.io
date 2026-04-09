import { useContext } from 'react';
import { ApiDataContext } from '../components/ApiDataContext';

export function useGitRefName(): string {
	const context = useContext(ApiDataContext);
	return context?.options?.gitRefName ?? 'master';
}

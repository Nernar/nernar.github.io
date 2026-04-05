/* eslint-disable no-param-reassign */

import '@vscode/codicons/dist/codicon.css';
import './styles.css';
import { useMemo } from 'react';
import DocRoot, { type Props as DocRootProps } from '@theme/DocRoot';
import type {
	ApiOptions,
	PackageReflectionGroup,
	TSDDeclarationReflectionMap
} from '../types';
import { ApiDataContext } from './ApiDataContext';

function mapPackagesToReflection(packages: PackageReflectionGroup[]): TSDDeclarationReflectionMap {
    const map: TSDDeclarationReflectionMap = {};
    const visited = new Set<any>();
    const stack: { current: any; parent?: any; path: string }[] = [];

    for (let i = packages.length - 1; i >= 0; i--) {
        const entryPoints = packages[i].entryPoints;
        for (let j = entryPoints.length - 1; j >= 0; j--) {
            stack.push({ 
                current: entryPoints[j].reflection, 
                parent: undefined,
                path: `packages[${i}].entryPoints[${j}].reflection`
            });
        }
    }

    let iterations = 0;

    while (stack.length > 0) {
        const { current, parent, path } = stack.pop()!;
        iterations++;

        if (!current || typeof current !== 'object') {
            continue;
        }
        
        if (visited.has(current)) {
            continue;
        }
        
        visited.add(current);
        let nextParent = parent;

        if ('id' in current && typeof current.id === 'number') {
            if (current.type !== 'reference') {
                map[current.id] = current;
                
                if (parent && 'id' in parent) {
                    current.parentId = parent.id;
                }
            }
            nextParent = current;
        }

        if (Array.isArray(current)) {
            for (let i = current.length - 1; i >= 0; i--) {
                stack.push({ 
                    current: current[i], 
                    parent: nextParent, 
                    path: `${path}[${i}]` 
                });
            }
        } else {
            const keys = Object.keys(current);
            for (let i = keys.length - 1; i >= 0; i--) {
                const key = keys[i];
                stack.push({ 
                    current: current[key], 
                    parent: nextParent, 
                    path: `${path}.${key}` 
                });
            }
        }
    }

    console.log(`[api] Iterated ${iterations} reflections, mapped ${visited.size} objects`);
    return map;
}

let cachedMap: TSDDeclarationReflectionMap | null = null;
let cachedPackages: PackageReflectionGroup[] | null = null;

export interface ApiPageProps extends DocRootProps {
	options: ApiOptions;
	packages: PackageReflectionGroup[];
}

function ApiPage({ options, packages, ...props }: ApiPageProps) {
	const value = useMemo(
		() => {
			if (cachedMap && cachedPackages === packages) {
				return { options, reflections: cachedMap };
			}
			cachedPackages = packages;
			cachedMap = mapPackagesToReflection(packages);
			return { options, reflections: cachedMap };
		},
		[options, packages],
	);

	return (
		<ApiDataContext.Provider value={value}>
			<div className="apiPage">
				<DocRoot {...props} />
			</div>
		</ApiDataContext.Provider>
	);
}

export default ApiPage;

import DocRoot, { type Props as DocRootProps } from '@theme/DocRoot';
import { NbtDataContext, type NbtSchemaMap } from '../../hooks/useNbtData';
import { NbtOptionsProvider } from '../../hooks/useNbtOptions';

export interface NbtPageProps extends DocRootProps {
	schemaMap: NbtSchemaMap;
}

export default function NbtPage({ schemaMap, ...props }: NbtPageProps) {
	return (
		<NbtDataContext.Provider value={schemaMap}>
			<NbtOptionsProvider>
				<div className="nbtPage">
					<DocRoot {...props} />
				</div>
			</NbtOptionsProvider>
		</NbtDataContext.Provider>
	);
}

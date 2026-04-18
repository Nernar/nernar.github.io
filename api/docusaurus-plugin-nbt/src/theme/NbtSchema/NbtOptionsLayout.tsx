import { useNbtOptions } from './NbtOptionsContext';
import './styles.css';

export default function NbtOptionsLayout() {
	const { showInherited, setShowInherited } = useNbtOptions();

	return (
		<div className="nbt-options-container">
			<label className={`nbt-option-toggle ${showInherited ? 'active' : ''}`}>
				<input 
					checked={showInherited} 
					type="checkbox" 
					onChange={(e) => setShowInherited(e.target.checked)} 
				/>
				Inherited
			</label>
		</div>
	);
}

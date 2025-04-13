export function escapeMdx(value: string): string {
	// New values are unicode!
	return value.replace('<', '＜').replace('>', '＞');
}

export function separateArrays<T>(array: T[], predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[] {
	const results: T[] = [];
	for (let index = 0, length = array.length; index < length; index++) {
		if (predicate.call(thisArg, array[index], index, array)) {
			results.push(array[index]);
			array.splice(index--, 1);
			length = array.length;
		}
	}
	return results;
}

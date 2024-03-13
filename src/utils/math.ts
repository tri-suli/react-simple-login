export function findMaxMin(nestedArray: number[][]): number | null {
    if (!nestedArray || !nestedArray.length || !nestedArray[0].length) {
        return null;
    }

    const maxValues: number[] = [];

    for (const subArray of nestedArray) {
        const maxInSubArray = Math.max(...subArray);
        maxValues.push(maxInSubArray);
    }

    return Math.min(...maxValues);
}

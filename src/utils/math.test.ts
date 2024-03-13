import { findMaxMin } from './math';

describe('findMaxMin', () => {
    test('returns null if the input array is empty', () => {
        expect(findMaxMin([])).toBe(null);
    });

    test('returns null if the input array contains an empty subarray', () => {
        expect(findMaxMin([[]])).toBe(null);
    });

    test('returns the minimum of maximums in the sub-arrays', () => {
        expect(findMaxMin([[1, 2, 3], [4, 5, 6]])).toBe(3);
        expect(findMaxMin([[10, 20], [30, 40, 50], [60]])).toBe(20);
        expect(findMaxMin([[1, 2, 3, 4, 5], [3, 4, 5, 6, 7], [6, 7, 8, 9, 10]])).toBe(5);
    });

    test('it works with negative numbers and zero', () => {
        expect(findMaxMin([[-10, -20], [30, 40, 0], [60]])).toBe(-10);
    });
});

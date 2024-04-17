import { describe, expect, test } from 'bun:test';
import bubbleSort from '../bubble_sort';

describe('bubble sort', () => {
  test('sort in place with no return', () => {
    expect(bubbleSort([])).toBeUndefined();
  });
  test('sort in ascending order', () => {
    const data = [4, 2, 7, 1, 3];
    bubbleSort(data);

    expect(data).toBe([1, 2, 3, 4, 7]);
  });
});

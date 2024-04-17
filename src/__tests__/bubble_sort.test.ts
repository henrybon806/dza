import { describe, expect, test } from 'bun:test';
import bubbleSort from '../bubble_sort';

describe('bubble sort', () => {
  test('sort in place with no return', () => {
    expect(bubbleSort([])).toBeUndefined();
  });

  test('sort in ascending order', () => {
    const data = [4, 2, 7, 1, 3];
    bubbleSort(data);

    expect(data).toEqual([1, 2, 3, 4, 7]);
  });

  test('single item', () => {
    const single = [1]; // the loneliest number
    bubbleSort(single);

    expect(single).toEqual([1]);
  });

  test('empty list', () => {
    const empty: number[] = [];
    bubbleSort(empty);

    expect(empty).toEqual([]);
  });
});

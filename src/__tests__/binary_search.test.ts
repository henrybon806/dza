import { describe, expect, test } from "bun:test";
import binarySearch from "../binary_search";
import linearSearch from "../linear_search";

describe("binary search", () => {
  const arr = [1, 3, 6, 69, 99, 420, 1337];

  test("Not found", () => {
    expect(binarySearch(arr, 222)).toBe(-1);
  });
  test("Empty list", () => {
    expect(binarySearch([], 420)).toBe(-1);
  });
  test("Found", () => {
    expect(binarySearch(arr, 420)).toBe(5);
  });
  test("Single element found", () => {
    expect(binarySearch([3], 3)).toBe(0);
  });
  test("Single element not found", () => {
    expect(binarySearch([3], 6)).toBe(-1);
  });

  // Testing time
  // if you are curious just how much faster throw in a console
  // printing both result times

  // NOTE: it is best practice to take the average of multiple
  // processes, but for this works for what we are doing
  const BIG_ARR = Array.from({ length: 1e6 }, (_, i) => i);

  test("Binary search speed", () => {
    const startLinear = Bun.nanoseconds();
    linearSearch(BIG_ARR, 1e6 - 3e3);
    const linearResult = Bun.nanoseconds() - startLinear;

    const startBinary = Bun.nanoseconds();
    binarySearch(BIG_ARR, 1e6 - 3e3);
    const binaryResult = Bun.nanoseconds() - startBinary;

    expect(binaryResult).toBeLessThan(linearResult);
  });
});

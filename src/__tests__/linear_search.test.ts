import { describe, expect, test } from "bun:test";
import linearSearch from "../linear_search";

describe("linear search", () => {
  const arr = [1, 3, 6, 69, 99, 420, 1337];

  test("Not found", () => {
    expect(linearSearch(arr, 222)).toBeFalse();
  });
  test("Empty list", () => {
    expect(linearSearch([], 420)).toBeFalse();
  });
  test("Found", () => {
    expect(linearSearch(arr, 420)).toBeTrue();
  });
  test("Single element found", () => {
    expect(linearSearch([3], 3)).toBeTrue();
  });
  test("Single element not found", () => {
    expect(linearSearch([3], 6)).toBeFalse();
  });
});

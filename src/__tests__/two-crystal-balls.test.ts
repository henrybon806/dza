import { describe, expect, test } from 'bun:test';
import twoCrystalBalls from '../two_crystal_balls';

describe('two crystal balls', () => {
  const i = Math.floor(Math.random() * (1e3 - 100 + 1)) + 100;
  const data = Array(1e3).fill(false);

  for (let _i = i; _i < data.length; ++_i) {
    data[_i] = true;
  }

  test('No break point', () => {
    expect(twoCrystalBalls(Array(420).fill(false))).toBe(-1);
  });
  test('Empty list', () => {
    expect(twoCrystalBalls([])).toBe(-1);
  });
  test('Found breakpoint', () => {
    expect(twoCrystalBalls(data)).toBe(i);
  });
});

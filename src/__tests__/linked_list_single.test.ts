import { beforeEach, describe, expect, test } from 'bun:test';
import SLinkedList from '../linked_list_s';

describe('singly linked list', () => {
  let list: SLinkedList<number>;

  beforeEach(() => {
    list = new SLinkedList<number>();
  });

  test('prepend: add item to beginning of list', () => {
    list.prepend(1);
    expect(list.get(0)).toBe(1);
  });
  test('prepend: increment length of list', () => {
    list.prepend(0);
    expect(list.length).toBe(1);
  });
  test('prepend: add multiple items', () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(1);
  });

  test('append: add item at end of list', () => {
    list.append(0);
    list.append(1);

    expect(list.get(list.length - 1)).toBe(1);
  });
  test('append: increment length', () => {
    list.append(3);
    list.append(6);

    expect(list.length).toBe(2);
  });

  test('get: return item at specified index', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.get(1)).toBe(2);
  });
  test('get: return undefined for out of bounds index', () => {
    list.append(0);
    expect(list.get(1)).toBeUndefined();
  });

  test('remove: remove item at specified index', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.remove(1)).toBe(2);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
  });
  test('remove: decrement length', () => {
    list.append(2);
    list.prepend(3);
    expect(list.length).toBe(2);
    expect(list.remove(1)).toBe(2);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(3);
  });
});

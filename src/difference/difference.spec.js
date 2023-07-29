import { differenceArray } from './difference.js';

describe('compare two arrays and write different values in new one', () => {
  it('compare empty arrays', () => {
    const array = [];
    const values = [];
    expect(differenceArray(array, values)).toEqual([]);
  });
  it('arrays of numbers', () => {
    const array = [1, 5, 3];
    const values = [1, 4, 3];
    expect(differenceArray(array, values)).toEqual([5]);
  });

  it('arrays of strings', () => {
    const array = ['apple', 'banana', 'orange', 'grape'];
    const values = ['banana', 'grapefruit', 'pear'];
    expect(differenceArray(array, values)).toEqual([
      'apple',
      'orange',
      'grape',
    ]);
  });
});

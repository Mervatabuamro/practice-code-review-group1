const splitObject = require('./split-object');

describe('Splits an object into multiple objects with one key/value pair each.', () => {
  describe('Empty array', () => {
    it('an empty object', () => {
      const expected = [];
      const received = splitObject({});
      expect(received).toEqual(expected);
    });
    it('an object with one key/value pair', () => {
      const expected = [{ a: 1 }];
      const received = splitObject({ a: 1 });
      expect(received).toEqual(expected);
    });
    it('an object with multiple key/value pairs', () => {
      const expected = [{ a: 1 }, { b: 2 }, { c: 3 }];
      const received = splitObject({ a: 1, b: 2, c: 3 });
      expect(received).toEqual(expected);
    });

    it('an object with different value types', () => {
      const expected = [{ a: 1 }, { b: 'two' }, { c: true }];
      const received = splitObject({ a: 1, b: 'two', c: true });
      expect(received).toEqual(expected);
    });
  });
});

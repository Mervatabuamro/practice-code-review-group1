# Split Object

# What does it do?

`splitObject` is a function that takes an object as an argument and splits it
into multiple objects, each containing one key/value pair from the original
object. The new objects are returned in an array.

---

## Strategy

The strategy for creating `splitObject` was iterating over the keys of the input
object and creating a new object for each key/value pair. This can be achieved
using various methods, but the most easy were `Object.keys()`,
`Object.values()`, `Array.prototype.map()`, and a `for` loop.

---

## Implementation

The specific implementation of the `splitObject` function uses the
`Object. keys()` and `Array.prototype.map()` methods to achieve the desired
result. These methods were chosen because they provide a concise and readable
way to iterate over the keys of the input object and create a new object for
each key/value pair. Thanks to the callback function inside `newObj` that uses every element received by to separate, so in short terms iterates for every pair present and former by `keys` and `result`.

Implementation

```javascript
const splitObject = (toSeparate = {}) => {
  const keys = Object.keys(toSeparate);
  const result = keys.map((key) => {
    const newObj = { [key]: toSeparate[key] };
    return newObj;
  });
  return result;
};
```

This implementation uses the `Object. keys()` method to get an array of the
input object's own enumerable properties, then uses the `keys.map()`
method to iterate over the array of keys and create a new object for each
key/value pair. The resulting array of objects is returned by the function.

There are other alternatives for implementing this function, such as using a
`for` loop or the `Object. values()` method, but this specific implementation
made more sense (check inspiration) .

---

## Use Cases

A function like `splitObject` can be useful in various situations where you need
to split an object into multiple objects with one key/value pair each. For
example, you might use this function when working with data that needs to be
transformed or processed in a specific way.

Splitting an object into key/value pairs to show

```javascript
const user = { name: 'Alice', age: 25, location: 'New York' };
const result = splitObject(user);
console.log(result);
```

---

## Inspiration

Just splitin' is fun i guess. I tried to separate both keys and values because a
problem should be divided into manageable parts, so keys, values then glue them
together.

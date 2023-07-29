function splitObject(toSeparate = {}) {
  const keys = Object.keys(toSeparate);
  const result = keys.map((key) => {
    const newObj = { [key]: toSeparate[key] };
    return newObj;
  });
  return result;
}

module.exports = splitObject;

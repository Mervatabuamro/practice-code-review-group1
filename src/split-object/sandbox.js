import { splitObject } from './split-object.js'; //didnt work

const splitObject = require('./split-object'); // worked

/*
  anything goes in this file, it's yours to make mistakes and be messy
    you don't need to lint this file, it's only for you
    but formatting the sandbox can make things easier to read

  you can do any experiments you like to explore or debug your function
    the .spec.js file is for tests and final validation only, not experiments
    the main file should include only the exported function and jsdoc string
*/

// This one isolates the key and value.

function splitObject(toSeparate = {}) {
  const keys = Object.keys(toSeparate);
  const result = keys.map(); // this takes the keys to iterate over them
}

//const key = ()

/* the object + [] refers to the value of certain key, something like that.
so this next one is another function that does get the value of the actual key */
function createNewObject(key) {
  const newObj = {};
  newObj[key] = this[key];
  return newObj;
}

// Here i need a way to make those two work together.
// Callback function

const splitObject = (toSeparate = {}) => {
  const keys = Object.keys(toSeparate);
  const result = keys.map(function (key) {
    const newObj = {};
    newObj[key] = toSeparate[key];
    return newObj;
  });
  return result;
};

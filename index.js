// refactor

const filterOutOdds = (...nums) => {
  return nums.filter((num) => num % 2 === 0);
};

// ## **findMin**

const findMin = (...nums) => {
  return Math.min(...nums);
};

// mergeObjects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// ## **doubleAndReturnArgs**

const doubleAndReturnArgs = (arr, ...args) => {
  const double = [];
  //   double last args
  args.forEach((el) => double.push(el * 2));
  //   spread both array to new arr and return
  return [...arr, ...double];
};

// ## **Slice and Dice!**

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  const newArr = [...items];
  const randomNum = Math.floor(Math.random() * items.length);
  newArr.splice(randomNum, randomNum);
  return newArr;
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};
/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newOBJ = { ...obj };
  delete newOBJ[key];
  return newOBJ;
};
/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  return { ...obj, [key]: val };
};

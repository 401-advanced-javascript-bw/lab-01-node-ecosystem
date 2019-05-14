'use strict';

let arithmetic = (module.exports = {});

function testRegex(nums) {
  let regex = /[^0-9]/g;
  const string = nums.join('');
  if (regex.test(string) || nums.length === 0) {
    return true;
  }
}

arithmetic.add = function(...nums) {
  if (testRegex(nums)) return null;
  else {
    return nums.reduce((acc, num) => acc + num);
  }
};

arithmetic.subtract = function(...nums) {
  if (testRegex(nums)) return null;
  else {
    return nums.reduce((acc, num) => acc - num);
  }
};

arithmetic.multiply = function(...nums) {
  if (testRegex(nums)) return null;
  else {
    return nums.reduce((acc, num) => acc * num);
  }
};

arithmetic.divide = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  if (a === 0 || b === 0) {
    return null;
  }
  return a / b;
};

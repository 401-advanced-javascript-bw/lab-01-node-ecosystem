'use strict';

let greet = (module.exports = {});

greet.sayHello = (...args) => {
  if (args.length !== 1) {
    return null;
  }
  if (typeof args[0] !== 'string') {
    return null;
  }
  return `Hello, ${args[0]}`;
};

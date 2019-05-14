'use strict';

const greet = require('../lib/greet.js');

describe('greet', () => {
  it('Return null if function takes in more than one parameter', () => {
    let name = greet.sayHello('Bonnie', 'Wang');
    expect(name).toBeNull();
  });

  it('Argument must be a string, otherwise return null', () => {
    let name = greet.sayHello(245);
    expect(name).toBeNull();
  });

  it('If argument is a string with one parameter, return Hello, (name)', () => {
    let name = greet.sayHello('Bonnie');
    expect(name).toEqual('Hello, Bonnie');
  });
});

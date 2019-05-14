'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic', () => {
  it('Adds an array on numbers', () => {
    let add = arithmetic.add(3, 4, 5, 5);
    expect(add).toEqual(17);
  });

  it('Return null when adding non-numerical values', () => {
    let add = arithmetic.add('a', 'b', 'c');
    expect(add).toBeNull();
  });

  it('Return null when subtracting non-numerical values', () => {
    let subtract = arithmetic.subtract('a', 'b');
    expect(subtract).toBeNull();
  });

  it('Subtracting numbers gives the differece', () => {
    let subtract = arithmetic.subtract(90, 50, 2);
    expect(subtract).toEqual(38);
  });

  it('When input is nothing, result is null', () => {
    let multiply = arithmetic.multiply();
    expect(multiply).toBeNull();
  });

  it('When a non-numerical value is input, result is null', () => {
    let multiply = arithmetic.multiply('a', 'b');
    expect(multiply).toBeNull();
  });

  it('Multiplies two numerical values', () => {
    let multiply = arithmetic.multiply(2, 4);
    expect(multiply).toEqual(8);
  });

  it('Division works when two numbers are entered', () => {
    let divide = arithmetic.divide(10, 5);
    expect(divide).toEqual(2);
  });

  it('Division returns null when non numerical values are entered', () => {
    let divide = arithmetic.divide('b', 2);
    expect(divide).toBeNull();
  });

  it('Dividing by 0 returns null', () => {
    let divide = arithmetic.divide(7, 0);
    expect(divide).toBeNull();
  });
});

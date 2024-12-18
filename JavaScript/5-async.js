'use strict';

const add = async (a, b) => {
  const result = a + b;
  return result;
};

const sum = (a, b) => {
  const promise = new Promise((resolve) => {
    resolve(a + b);
  });
  return promise;
};

const total = (a, b) => {
  const promise = Promise.resolve(a + b);
  return promise;
};

const calculate = (a, b) => {
  const { promise, resolve, reject } = Promise.withResolvers();
  if (typeof a !== 'number' || typeof b !== 'number') {
    reject(new Error('Function expected to be called with numbers'));
  } else {
    resolve(a + b);
  }
  return promise;
};

console.log({ add, sum, total, calculate });

'use strict';

const main = async () => {
  // Async function

  const add = async (a, b) => a + b;

  const res1 = await add(2, 3);
  console.log(`await add(2, 3) = ${res1}`);

  // Promise-returning function

  const sum = (a, b) => new Promise((resolve) => resolve(a + b));

  const res2 = await sum(2, 3);
  console.log(`await sum(2, 3) = ${res2}`);

  // Promise-returning function with Promise static method

  const total = (a, b) => Promise.resolve(a + b);

  const res3 = await total(2, 3);
  console.log(`await total(2, 3) = ${res3}`);

  // Use Promise.withResolvers

  const calculate = (a, b) => {
    const { promise, resolve, reject } = Promise.withResolvers();
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject(new Error('Function expected to be called with numbers'));
    } else {
      resolve(a + b);
    }
    return promise;
  };

  try {
    const res4 = await calculate('2', 3);
    console.log(`await calculate('2', 3) = ${res4}`);
  } catch (error) {
    console.log({ error });
  }
};

main();

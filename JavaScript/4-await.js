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
};

main();

'use strict';

const Entity = class {
  constructor(n) {
    return new Promise((resolve) => {
      this.n = n;
      return resolve(this);
    });
  }
  async asyncMethod() {}
  static async asyncStaticMethod() {}
};

const main = async () => {
  const instance = await new Entity(100);
  console.log({ instance });

  const { asyncMethod } = instance;
  console.log({ asyncMethod });
};

main();

const { asyncStaticMethod } = Entity;
console.log({ asyncStaticMethod });

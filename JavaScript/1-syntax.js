'use strict';

const asyncArrow = async () => {};
console.log({ asyncArrow });

const asyncExpression = async function () {};
console.log({ asyncExpression });

async function asyncDeclaration() {}
console.log({ asyncDeclaration });

const instance = {
  async asyncMethod() {},
};
console.log({ instance });

const Entity = class {
  static N = 200;

  asyncField = async () => 300;

  constructor(n) {
    return new Promise((resolve) => {
      this.n = n;
      return resolve(this);
    });
  }

  async asyncMethod() {
    return this.#privateAsyncMethod();
  }

  async #privateAsyncMethod() {
    return this.n;
  }

  static async asyncStaticMethod() {
    return Entity.N;
  }
};

const { asyncStaticMethod } = Entity;
console.log({ asyncStaticMethod });

class EntityWitAsyncConstructor {
  static N = 200;

  constructor(n) {
    return this.#init(n);
  }

  async #init(n) {
    this.n = n;
    return this;
  }

  async asyncMethod() {
    return this.n;
  }

  static staticMethod() {
    return EntityWitAsyncConstructor.#privateAsyncStaticMethod();
  }

  static async #privateAsyncStaticMethod() {
    return EntityWitAsyncConstructor.N;
  }
}

const main = async () => {
  {
    const instance = await new Entity(100);
    console.log({ instance });
    const { asyncMethod } = instance;
    console.log({ asyncMethod });
    const result = await instance.asyncMethod();
    console.log({ result });
    const reference = await instance.asyncField();
    console.log({ reference });
  }

  const instance = await new EntityWitAsyncConstructor(100);
  console.log({ instance });
  const { asyncMethod } = instance;
  console.log({ asyncMethod });
  const result = await EntityWitAsyncConstructor.staticMethod();
  console.log({ result });
};

main();

'use strict';

const AsyncFunction = (async () => {}).constructor;
console.log(AsyncFunction);

const asyncFunctionPrototype = Object.getPrototypeOf(async () => {});
console.log(asyncFunctionPrototype);

console.log(AsyncFunction.prototype === asyncFunctionPrototype);

const sayHello = (name) => {
  return `Hello ${name}`;
};

console.log(sayHello('John'));    // 正しい
console.log(sayHello([1, 2, 3])); // やばいバグになる可能性


testES6 = require('./driver.es6');
testTS = require('./driver.ts');
testCoffee = require('./driver.coffee');

console.log(testES6.default);
console.log(testTS.default);
console.log(testCoffee(2));

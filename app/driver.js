testES6 = require('./driver.es6');
testTS = require('./driver.ts');
testCoffee = require('./driver.coffee');
testHbs = require('./tmpl/cow.hbs');

window.P = window.Promise = _promise;
_time.locale('ru');
console.log(_time().format('MMMM Do YYYY, h:mm:ss a'));
console.log(_money.formatMoney(12345678));
console.log(window.P);
console.log($);
console.log(_);
console.log(Bb);
console.log(Mn);

console.log(testES6.default);
console.log(testTS.default);
console.log(testCoffee(2));

console.log(
	testHbs({
		cowWords: 'Flack!'
	})
);

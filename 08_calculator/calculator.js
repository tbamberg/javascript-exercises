const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = array.reduce((subTotal, a) => subTotal + a, 0);
  return total;
};

const multiply = function(array) {
  let total = array.reduce((subTotal, a) => subTotal * a, 1);
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let total = 1;
  for (let i = 2; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  let total = 0;

  for ( const numItem in numArray ) {
    total += parseInt( numArray[numItem] );
  }

  return total;
};

const multiply = function(numArray) {
  let total = 1;

  for ( const numItem in numArray ) {
    total *= parseInt( numArray[numItem] );
  }

  return total;
};

const power = function(num1, powNum) {
	return Math.pow(num1, powNum);
};

const factorial = function(num) {
	let total = 1;

  for ( let i = 2; i <= num; i++ ) {
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

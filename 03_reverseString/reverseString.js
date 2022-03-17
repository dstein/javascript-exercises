const reverseString = function( stringToReverse = '' ) {
    const reversedString = stringToReverse.split('').reverse().join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

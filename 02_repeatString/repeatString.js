const repeatString = function(repeatWord, timesToRepeat) {

    let finalString = '';

    if ( timesToRepeat >= 0 ) {

        for ( let i = 1; i <= timesToRepeat; i++ ) {
            finalString += repeatWord;
        }

    } else {
        finalString = 'ERROR';
    }

    return finalString;

};

// Do not edit below this line
module.exports = repeatString;

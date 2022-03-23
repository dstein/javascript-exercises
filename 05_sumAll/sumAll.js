const sumAll = function(startInt, endInt) {

    if ( startInt < 0 || endInt < 0 ) {
        return "ERROR";
    }

    if ( ! Number.isInteger(startInt) || ! Number.isInteger(endInt) ) {
        return "ERROR";
    }

    const range = [];
    let endSum = 0;

    if ( startInt < endInt ) {

        for ( let i = startInt; i <= endInt; i++ ) {
            range.push(i);
        }

    } else {

        for ( let i = endInt; i <= startInt; i++ ) {
            range.push(i);
        }

    }


    if ( range.length ) {

        for ( rangeItem of range ) {
            endSum += rangeItem;
        }

    } else {
        //Error
    }

    return endSum;

};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function( myArray, toRemove ) {

    const removeArgArray = Array.from( arguments );
    removeArgArray.splice(0, 1); //remove first arg

    const modArray = myArray.filter( (item, index) => {

        if ( ! removeArgArray.includes(item) ) {
            return true;
        }

    });

    //Alt:
    //const modArray = myArray.filter( (item) => ! removeArgArray.includes(item) );
    //Array.indexOf can also be used by checking for values in myArray not included
    //in the removeArgArray


    return modArray;
};

// Do not edit below this line
module.exports = removeFromArray;

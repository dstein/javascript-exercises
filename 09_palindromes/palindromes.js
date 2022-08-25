const palindromes = function (paliString) {
    const paliArray = paliString.split('');
    let finalPali   = "";
    let startPali   = "";

    const paliFilter = paliArray.filter( (item) => {
        // !! converts result to bool
        let result = !!item.match( /^[.,:!? ]/ );

        if ( ! result ) {
            return true;
        } else {
            return false;
        }
    });

    startPali = paliFilter.join('').toLowerCase();
    finalPali = paliFilter.reverse('').join('').toLowerCase();

    if ( startPali === finalPali ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

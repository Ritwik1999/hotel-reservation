const isValidNumRooms = function(numRooms) {
    if (isNaN(numRooms) || typeof numRooms !== 'number') {
        return {
            valid: false,
            reason: 'numRooms not a number'
        };
    }

    numRooms = Math.floor(numRooms);
    if (numRooms <= 0 || numRooms > 1000) {
        return {
            valid: false,
            reason: 'numRooms out of bounds'
        };
    }

    return {
        valid: true,
        reason: 'OK'
    };
}

exports.isValidNumRooms = isValidNumRooms;
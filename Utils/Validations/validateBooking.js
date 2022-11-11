const isValidBooking = function({ startDate, endDate }) {
    if (typeof startDate !== 'number' || typeof endDate !== 'number') {
        return {
            valid: false,
            reason: "startDate/endDate not a number"
        };
    }

    if (startDate < 0 || endDate < 0)
        return {
            valid: false,
            reason: "startDate/endDate is not non-negative"
        };

    if (startDate > endDate) {
        return {
            valid: false,
            reason: "startDate is after endDate"
        };
    }

    if (endDate >= 365) {
        return {
            valid: false,
            reason: "endDate must be < 365"
        };
    }

    return {
        valid: true,
        reason: 'OK'
    };
}

exports.isValidBooking = isValidBooking;
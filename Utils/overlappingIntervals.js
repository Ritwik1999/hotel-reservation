const areOverlappingIntervals = function (existingBooking, { startDate, endDate }) {
    if (existingBooking.endDate < startDate || endDate < existingBooking.startDate)
        return false;
    return true;
};

exports.areOverlappingIntervals = areOverlappingIntervals;
const { areOverlappingIntervals } = require('./overlappingIntervals');

const roomVacant = function(roomBookings, inputBooking) {
    // roomBookings = [...]
    if (roomBookings.length == 0) {
        return true;
    }

    // check for conflicts among the already booked dates
    let canRoomBeBooked = !roomBookings.some(booking => {
        return areOverlappingIntervals(booking, inputBooking);
    });

    return canRoomBeBooked;
};

exports.roomVacant = roomVacant;
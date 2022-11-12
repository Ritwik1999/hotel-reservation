const { isValidBooking } = require('./Validations/validateBooking');
const { roomVacant } = require('./roomVacant');

const processBooking = (booking, verdicts, roomFixtures, numRooms) => {
    const { valid, reason } = isValidBooking(booking);
    if (!valid) {
        verdicts.push({ status: 'Decline', reason });
        return;
    }

    // process a valid booking
    let bookingAccepted = false;
    for (let index = 0; index < numRooms; index++) {
        if (roomVacant(roomFixtures[index], booking)) {
            verdicts.push({ status: 'Accept', reason: 'OK', roomIndex: index });
            roomFixtures[index].push(booking);
            bookingAccepted = true;
            break;
        }
    }

    if (!bookingAccepted) {
        verdicts.push({ status: 'Decline', reason: 'No rooms available' });
    }
};

exports.processBooking = processBooking;
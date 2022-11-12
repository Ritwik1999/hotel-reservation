const { processBooking } = require('./processBooking');

// output variables
const verdicts = [];
let roomFixtures;

const prepVars = function (argv) {
    const numRooms = Math.floor(argv.numRooms);
    roomFixtures = new Array(numRooms);

    // fill roomFixtures
    for (let index = 0; index < numRooms; index++) {
        roomFixtures[index] = [];
    }
}

const processBookings = function (bookings, argv) {
    // prep vars
    prepVars(argv);
    bookings.forEach(booking => {
        processBooking(booking, verdicts, roomFixtures, roomFixtures.length);
    });
    console.log(verdicts);
    console.log(roomFixtures);
};

exports.processBookings = processBookings;
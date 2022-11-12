const { processBooking } = require('./processBooking');
const { declareVerdicts } = require('./Output/printVerdicts');
const { writeDebugLogs } = require('./Output/debug');

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

    // Write output to terminal
    declareVerdicts(verdicts, bookings);

    // if debug was requested
    if (argv.debug) {
        writeDebugLogs(verdicts, bookings);
    }
};

exports.processBookings = processBookings;
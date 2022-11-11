const fs = require('fs');
const readLine  = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readLine.createInterface({ input, output });

const { processBooking } = require('../processBooking');

const prepBookings = function (verdicts, roomFixtures, numRooms) {
    rl.question('Enter the path of input json file: ', (answer) => {
        try {
            const data = fs.readFileSync(answer, 'utf8');
            const bookings = JSON.parse(data);
            rl.close();

            bookings.forEach(booking => {
                processBooking(booking, verdicts, roomFixtures, numRooms);
            });

            console.log(verdicts);
            console.log(roomFixtures);
        } catch (error) {
            throw new Error(error);
        }
    });
};

exports.prepBookings = prepBookings;
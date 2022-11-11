const inquirer = require('inquirer');

const { continueQuestion, reservationQuestions } = require('./Input/questions');
const { processBooking } = require('./processBooking');

const processBookings = function (bookings) {
    bookings.forEach(booking => {
        processBooking(booking, verdicts, roomFixtures, numRooms);
    });
}

const askContinueQuestion = function (bookings) {
    inquirer
        .prompt(continueQuestion)
        .then(answer => {
            if(answer.continue) {
                askReservationQuestions(bookings);
            } else {
                processBookings(bookings);
            }
        }).catch(err => {
            console.error(err);
        });
}

const askReservationQuestions = function (bookings) {
    inquirer
    .prompt(reservationQuestions)
    .then(answer => {
        bookings.push(answer);
        askContinueQuestion(bookings);
    }).catch(err => {
        console.error(err);
    });
};

exports.askReservationQuestions = askReservationQuestions;

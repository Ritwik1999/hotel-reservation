const inquirer = require('inquirer');
const { continueQuestion, reservationQuestions } = require('./questions');

// receive input bookings
const bookings = [];

const askContinueQuestion = function (argv) {
    inquirer
        .prompt(continueQuestion)
        .then(answer => {
            if(answer.continue) {
                askReservationQuestions(argv);
            } else {
                processBookings(bookings, argv);
                return;
            }
        }).catch(err => {
            console.error(err);
        });
}

const askReservationQuestions = function (argv) {
    inquirer
    .prompt(reservationQuestions)
    .then(answer => {
        bookings.push(answer);
        askContinueQuestion(argv);
    }).catch(err => {
        console.error(err);
    });
};

exports.doManualInput = askReservationQuestions;
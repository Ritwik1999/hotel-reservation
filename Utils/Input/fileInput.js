const { open } = require('node:fs/promises');
const inquirer = require('inquirer');

const { filePathQuestion } = require('./questions');
const { processBookings } = require('../processBookings');
const { validateBookingProperties } = require('../Validations/validateBooking');

// receive input bookings
let bookings = [];

const readFileContents = function (fileHandle, argv) {
    fileHandle.readFile({ encoding: 'utf8' })
        .then(dataJson => {
            bookings = JSON.parse(dataJson);
            if (!validateBookingProperties(bookings))
                throw new Error('Booking startDate/endDate not found in one or more bookings');
            processBookings(bookings, argv);
            fileHandle.close();
            return;
        })
        .catch(err => {
            console.error(err);
            fileHandle.close();
            process.exit(1);
        });
}

const accessFilePath = function (filePath, argv) {
    try {
        open(filePath, 'r')
            .then((fileHandle) => {
                readFileContents(fileHandle, argv);
            })
            .catch(err => {
                throw new Error(err);
            })
    } catch (error) {
        console.error('File counld not be opened: ', error);
        process.exit(1);
    }
};

const askFilePathQuestion = function(argv) {
    inquirer
        .prompt(filePathQuestion)
        .then(answer => {
            accessFilePath(answer.filePath, argv);
        })
        .catch(err => {
            console.error('Issue processing your input: ', err``);
            process.exit(1);
        });
};

exports.doFileInput = askFilePathQuestion;
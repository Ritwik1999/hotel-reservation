const { open } = require('node:fs/promises');
const inquirer = require('inquirer');

const { filePathQuestion } = require('./questions');
const { processBookings } = require('../processBookings');

// receive input bookings
let bookings = [];

const readFileContents = function (fileHandle, argv) {
    fileHandle.readFile({ encoding: 'utf8' })
        .then(dataJson => {
            bookings = JSON.parse(dataJson);
            processBookings(bookings, argv);
            return;
        })
        .catch(err => {
            console.error(err);
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
const questions = [
    {
        type: 'number',
        name: 'startDate',
        message: 'Reservation start date'
    },
    {
        type: 'number',
        name: 'endDate',
        message: 'Reservation end date'
    }
];

const continueQuestion = [
    {
        type: 'confirm',
        name: 'continue',
        message: 'do you want to add more bookings'
    }
];

const filePathQuestion = [
    {
        type: 'input',
        name: 'filePath',
        message: 'Enter input file path'
    }
];

exports.continueQuestion = continueQuestion;
exports.filePathQuestion = filePathQuestion;
exports.reservationQuestions = questions;
const chalk = require('chalk');
const { table } = require('table');

const printVerdicts = function (verdicts, bookings) {
    const tableData = [
        ['', chalk.bold('StartDate'), chalk.bold('EndDate'), chalk.bold('Result: Accept/Decline')],
    ];

    for (let index = 0; index < bookings.length; index++) {
        let row = [];
        row.push(chalk.bold.blueBright(`Booking ${index+1}`));
        row.push(bookings[index].startDate);
        row.push(bookings[index].endDate);
        if (verdicts[index].roomIndex) {
            row.push(chalk.bold.greenBright(verdicts[index].status));
        } else {
            row.push(chalk.bold.redBright(verdicts[index].status));
        }
        tableData.push(row);
    }

    console.log('Bookings Status:');
    console.log(table(tableData));
};

exports.declareVerdicts = printVerdicts;
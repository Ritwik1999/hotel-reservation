const writeDebugLogs = function(verdicts, bookings) {
    const debugArray = [];

    for (let index = 0; index < bookings.length; index++) {
        const row = {};
        row.bookingDetails = bookings[index];
        row.verdict = {};
        row.verdict.status = verdicts[index].status;
        row.verdict.reason = verdicts[index].reason;
        if (verdicts[index].reason === 'OK') {
            row.verdict.roomNumber = verdicts[index].roomIndex + 1;
        }
        debugArray.push(row);
    }

    console.log('---------------------------------DEBUG OUTPUT--------------------------------------------------\n');
    console.log(debugArray);
    console.log('------------------------------------------------------------------------------------------------\n');
};

exports.writeDebugLogs = writeDebugLogs;
const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('numRooms', {
        alias: 'n',
        describe: 'Number of rooms in the hotel'
    })
    .option('mode', {
        alias: 'm',
        describe: `Mode to run in: 1 for manual input, 2 for file input`,
        choices: [1, 2]
    })
    .demandOption(['numRooms', 'mode'], 'Please provide numRooms and mode argument to work with this tool')
    .help()
    .argv;

exports.argv = argv;
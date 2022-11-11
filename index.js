#!/usr/bin/env node
'use strict';

const chalk = require('chalk');

const { isValidNumRooms } = require('./Utils/Validations/validateNumRooms');
const { argv } = require('./Utils/Input/processOptions');
const { prepBookings } = require('./Utils/Input/prepBookings');

// Validate numRooms
const { valid, reason } = isValidNumRooms(argv.numRooms);
if (!valid) {
    const log = chalk.red(reason);
    console.log(log);
    process.exit(1);
}

// Validate modes
if (argv.mode !== 1 && argv.mode !== 2) {
    const log = chalk.red('mode must either be 1 or 2');
    console.log(log);
    process.exit(1);
}

const verdicts = [];
const numRooms = Math.floor(argv.numRooms);
const mode = argv.mode;
const roomFixtures = new Array(numRooms);

for (let index = 0; index < numRooms; index++) {
    roomFixtures[index] = [];
}

prepBookings(mode, verdicts, roomFixtures, numRooms);
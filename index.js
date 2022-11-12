#!/usr/bin/env node
'use strict';

const chalk = require('chalk');

const { isValidNumRooms } = require('./Utils/Validations/validateNumRooms');
const { argv } = require('./Utils/Input/processOptions');
const { doManualInput } = require('./Utils/Input/manualInput');
const { doFileInput } = require('./Utils/Input/fileInput');

// Validate numRooms
const { valid, reason } = isValidNumRooms(argv.numRooms);
if (!valid) {
    const log = chalk.red(reason);
    console.log(log);
    process.exit(1);
}

const mode = argv.mode;

// Mode specific discourse
if (mode === 1) {
    doManualInput(argv);
} else {
    doFileInput(argv);
}
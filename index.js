#!/usr/bin/env node
'use strict';

const chalk = require('chalk');

const { isValidNumRooms } = require('./Utils/Validations/validateNumRooms');
const { argv } = require('./Utils/Input/processOptions');

// Validate numRooms
const { valid, reason } = isValidNumRooms(argv.numRooms);
if (!valid) {
    const log = chalk.red(reason);
    console.log(log);
    process.exit(1);
}

// TODO: add a debug option as well

const numRooms = Math.floor(argv.numRooms);
const mode = argv.mode;
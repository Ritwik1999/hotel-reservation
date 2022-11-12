const { isValidNumRooms } = require('../Utils/Validations/validateNumRooms');

test('validate numRooms - valid', () => {
    expect(isValidNumRooms(1).valid).toBe(true);
    expect(isValidNumRooms(1000).valid).toBe(true);
    expect(isValidNumRooms(500).valid).toBe(true);
});

test('validate numRooms - out of bounds', () => {
    const leftXtreme = isValidNumRooms(0);
    const negVal = isValidNumRooms(-1);
    const rightXtreme = isValidNumRooms(1001);

    expect(leftXtreme.valid).toBe(false);
    expect(leftXtreme.reason).toBe('numRooms out of bounds');

    expect(negVal.valid).toBe(false);
    expect(negVal.reason).toBe('numRooms out of bounds');

    expect(rightXtreme.valid).toBe(false);
    expect(rightXtreme.reason).toBe('numRooms out of bounds');
});

test('validate numRooms - invalid input', () => {
    const notANumber = isValidNumRooms(NaN);
    const stringVal = isValidNumRooms('Ritwik');

    expect(notANumber.valid).toBe(false);
    expect(notANumber.reason).toBe('numRooms not a number');

    expect(stringVal.valid).toBe(false);
    expect(stringVal.reason).toBe('numRooms not a number');
});
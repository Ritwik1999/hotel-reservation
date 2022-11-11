const { isValidBooking } = require('../Utils/Validations/validateBooking');

const validBooking = {
    startDate: 3,
    endDate: 9
};

const validBookingSameDates = {
    startDate: 5,
    endDate: 5
};

const validaBookingZeroDate = {
    startDate: 0,
    endDate: 1
};

const invalidBookingNegativeStartDate = {
    startDate: -3,
    endDate: 9
};

const invalidBookingNegativeEndDate = {
    startDate: 3,
    endDate: -9
};

const invalidBookingGreaterStartDate = {
    startDate: 13,
    endDate: 9
};

const invalidBookingEndDateOutOfBound = {
    startDate: 3,
    endDate: 400
};

const invalidBookingDateNaN = {
    startDate: "yo",
    endDate: 400
};

test('validate a booking - valid', () => {
    expect(isValidBooking(validBooking).valid).toBe(true);
    expect(isValidBooking(validBooking).reason).toBe("OK");

    expect(isValidBooking(validBookingSameDates).valid).toBe(true);
    expect(isValidBooking(validBookingSameDates).reason).toBe("OK");

    expect(isValidBooking(validaBookingZeroDate).valid).toBe(true);
    expect(isValidBooking(validaBookingZeroDate).reason).toBe("OK");
});

test('validate a booking - negative dates', () => {
    expect(isValidBooking(invalidBookingNegativeStartDate).valid).toBe(false);
    expect(isValidBooking(invalidBookingNegativeStartDate).reason).toBe("startDate/endDate is not non-negative");

    expect(isValidBooking(invalidBookingNegativeEndDate).valid).toBe(false);
    expect(isValidBooking(invalidBookingNegativeEndDate).reason).toBe("startDate/endDate is not non-negative");
});

test('validate a booking - greater start date', () => {
    expect(isValidBooking(invalidBookingGreaterStartDate).valid).toBe(false);
    expect(isValidBooking(invalidBookingGreaterStartDate).reason).toBe("startDate is after endDate");
});

test('validate a booking - end date out of bound', () => {
    expect(isValidBooking(invalidBookingEndDateOutOfBound).valid).toBe(false);
    expect(isValidBooking(invalidBookingEndDateOutOfBound).reason).toBe("endDate must be < 365");
});

test('validate a booking - NaN input', () => {
    expect(isValidBooking(invalidBookingDateNaN).valid).toBe(false);
    expect(isValidBooking(invalidBookingDateNaN).reason).toBe("startDate/endDate not a number");
});
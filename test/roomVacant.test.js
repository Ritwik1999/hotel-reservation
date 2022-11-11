const { roomVacant } = require('../Utils/roomBookingUtil');

const roomBookings = [
    {
        startDate: 0,
        endDate: 5
    },
    {
        startDate: 7,
        endDate: 13
    },
    {
        startDate: 6,
        endDate: 6
    }
];

const nonOverlappingBooking = {
    startDate: 14,
    endDate: 16
};

const overlappingBooking = {
    startDate: 0,
    endDate: 4
};

test('Room vacany - non conflicting booking', () => {
    expect(roomVacant(roomBookings, nonOverlappingBooking)).toBe(true);
});

test('Room vacancy - conflicting booking', () => {
    expect(roomVacant(roomBookings, overlappingBooking)).toBe(false);
});
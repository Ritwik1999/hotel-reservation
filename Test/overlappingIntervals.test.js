const { areOverlappingIntervals } = require('../Utils/overlappingIntervals');

const nonOverlappingIntervals = [
    {
        startDate: 1,
        endDate: 3
    },
    {
        startDate: 4,
        endDate: 10
    }
];

const containedIntervals = [
    {
        startDate: 1,
        endDate: 10
    },
    {
        startDate: 5,
        endDate: 8
    }
];

const overlappingBoundaryIntervals = [
    {
        startDate: 1,
        endDate: 4
    },
    {
        startDate: 4,
        endDate: 6
    }
];

const containedIntervalsWithMatchingBoundary = [
    {
        startDate: 0,
        endDate: 4
    },
    {
        startDate: 0,
        endDate: 5
    }
];

test('Non overlapping intervals', () => {
    expect(areOverlappingIntervals(...nonOverlappingIntervals)).toBe(false);
    expect(areOverlappingIntervals(...nonOverlappingIntervals.reverse())).toBe(false);
});

test('Overlapping Intervals - one contained inside other', () => {
    expect(areOverlappingIntervals(...containedIntervals)).toBe(true);
    expect(areOverlappingIntervals(...containedIntervals.reverse())).toBe(true);
});

test('Overlapping Intervals - overlapping boundaries', () => {
    expect(areOverlappingIntervals(...overlappingBoundaryIntervals)).toBe(true);
    expect(areOverlappingIntervals(...overlappingBoundaryIntervals.reverse())).toBe(true);
});

test('Overlapping Intervals - one contained in the other with matching boundary', () => {
    expect(areOverlappingIntervals(...containedIntervalsWithMatchingBoundary)).toBe(true);
    expect(areOverlappingIntervals(...containedIntervalsWithMatchingBoundary.reverse())).toBe(true);
});
import sum from '@utils/sum';

describe('Array', () => {
    describe('#indexOf()', () => {
        test('it should return -1 when the value is not present', () => {
            expect([1, 2, 3].indexOf(4)).toEqual(-1);
        });
    });
});

describe('Sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

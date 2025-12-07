/* eslint-env jest */
const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    test('should capitalize all words in a string', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
        expect(capitalizeWords('javaScript is fun')).toBe('JavaScript Is Fun');
    });

    test('should handle empty strings', () => {
        expect(capitalizeWords('')).toBe('');
    });
});

describe('filterActiveUsers', () => {
    test('should return only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Carol', isActive: true },
        ];
        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Carol', isActive: true },
        ]);
    });

    test('should return an empty array if no active users', () => {
        const users = [
            { name: 'Bob', isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([]);
    });
});

describe('logAction', () => {
    test('should log the correct action message', () => {
        console.log = jest.fn();
        logAction('login', 'Alice');
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining('User Alice performed login at')
        );
    });
});



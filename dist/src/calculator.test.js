import { add, subtract, multiply, divide } from './calculator';
describe('Calculator', () => {
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('subtracts two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });
    test('multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });
    test('divides two numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });
    test('throws error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
});

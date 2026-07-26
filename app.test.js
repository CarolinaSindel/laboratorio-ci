const { sumar } = require('./app');

test("Suma correcta", () => {
    expect(sumar(5,5)).toBe(10);
});
const { sumar, restar } = require('./app');

test("Suma correcta", () => {
    expect(sumar(5, 5)).toBe(10);
});

test("Resta correcta", () => {
    expect(restar(8, 3)).toBe(5);
});
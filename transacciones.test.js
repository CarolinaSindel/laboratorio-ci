const {
    depositar,
    retirar
} = require("./transacciones");

test("Depositar correctamente", () => {
    expect(depositar(1000, 500)).toBe(1500);
});

test("Retirar correctamente", () => {
    expect(retirar(1000, 300)).toBe(700);
});

test("No permitir retiro mayor al saldo", () => {
    expect(() => retirar(500, 800))
        .toThrow("Saldo insuficiente");
});
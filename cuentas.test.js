const {
    crearCuenta,
    consultarSaldo
} = require("./cuentas");

test("Crear cuenta correctamente", () => {
    const cuenta = crearCuenta("001", "Carolina", 1000);

    expect(cuenta).toEqual({
        numero: "001",
        cliente: "Carolina",
        saldo: 1000
    });
});

test("Consultar saldo correctamente", () => {
    crearCuenta("002", "María", 500);

    expect(consultarSaldo("002")).toBe(500);
});
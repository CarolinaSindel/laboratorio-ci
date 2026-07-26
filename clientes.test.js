const {
    registrarCliente,
    buscarCliente
} = require("./clientes");

test("Registrar cliente correctamente", () => {
    const cliente = registrarCliente(1, "Carolina");

    expect(cliente).toEqual({
        id: 1,
        nombre: "Carolina"
    });
});

test("Buscar cliente correctamente", () => {
    registrarCliente(2, "María");

    const cliente = buscarCliente(2);

    expect(cliente.nombre).toBe("María");
});
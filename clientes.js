const clientes = [];

function registrarCliente(id, nombre) {
    const cliente = { id, nombre };
    clientes.push(cliente);
    return cliente;
}

function buscarCliente(id) {
    return clientes.find(cliente => cliente.id === id);
}

module.exports = {
    registrarCliente,
    buscarCliente
};
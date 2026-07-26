const {
    registrarCliente,
    buscarCliente
} = require("./clientes");

const {
    crearCuenta,
    consultarSaldo
} = require("./cuentas");

const {
    depositar,
    retirar
} = require("./transacciones");

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

const cliente = registrarCliente(1, "Carolina");
const cuenta = crearCuenta("001", cliente.nombre, 1000);

let saldoActual = consultarSaldo("001");
saldoActual = depositar(saldoActual, 500);
saldoActual = retirar(saldoActual, 200);

console.log("Cliente:", buscarCliente(1));
console.log("Cuenta:", cuenta);
console.log("Saldo final:", saldoActual);
console.log("Resultado:", sumar(10, 5));

module.exports = {
    sumar,
    restar
};
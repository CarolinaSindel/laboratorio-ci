const cuentas = [];

function crearCuenta(numero, cliente, saldoInicial = 0) {
    const cuenta = {
        numero,
        cliente,
        saldo: saldoInicial
    };

    cuentas.push(cuenta);
    return cuenta;
}

function consultarSaldo(numero) {
    const cuenta = cuentas.find(cuenta => cuenta.numero === numero);

    if (!cuenta) {
        return null;
    }

    return cuenta.saldo;
}

module.exports = {
    crearCuenta,
    consultarSaldo
};
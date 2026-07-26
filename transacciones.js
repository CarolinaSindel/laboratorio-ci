function depositar(saldo, monto) {
    if (monto <= 0) {
        throw new Error("El monto debe ser mayor que cero");
    }

    return saldo + monto;
}

function retirar(saldo, monto) {
    if (monto <= 0) {
        throw new Error("El monto debe ser mayor que cero");
    }

    if (monto > saldo) {
        throw new Error("Saldo insuficiente");
    }

    return saldo - monto;
}

module.exports = {
    depositar,
    retirar
};
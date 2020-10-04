const sql = require("../db/connection");
const todosLosPedidos = "SELECT usuario_id, pedidos.pedido_id, pedidosconcomidas.comida_id, cantidad, precioUnidad, pedidos.hour, pedidos.estadopedido, pago.formaPago, description, name FROM pedidosconcomidas INNER JOIN pedidos ON pedidosconcomidas.pedido_id = pedidos.pedido_id INNER JOIN comidas ON pedidosconcomidas.comida_id = comidas.comida_id INNER JOIN estadopedido ON pedidos.estadopedido  = estadopedido.estado_id INNER JOIN pago ON pedidos.formaPago = pago.pago_id WHERE pedidos.pedido_id"
const cancelarPedido = "UPDATE pedidos SET estadopedido = 6 WHERE pedido_id = ? "
const modificarEstadoPedido = "UPDATE pedidos SET estadopedido = ? WHERE pedido_id = ?"
const insertarPedido = "INSERT INTO pedidos (usuario_id, formaPago, orderDescription) VALUES (?, ?, ?)";
const comidas_y_pedidos = "INSERT INTO pedidosconcomidas (pedido_id, comida_id, cantidad, precioUnidad) VALUES (?, ?, ?, ?)"
const pedidoDatos = "SELECT * FROM pedidos WHERE usuario_id = ?"
const comidaDatos = "SELECT * FROM comidas WHERE comida_id = ? "
const pedidoPorID = "SELECT usuario_id, pedidos.pedido_id, pedidosconcomidas.comida_id, cantidad, precioUnidad, pedidos.hour, pedidos.estadopedido, pago.formaPago, description, name FROM pedidosconcomidas INNER JOIN pedidos ON pedidosconcomidas.pedido_id = pedidos.pedido_id INNER JOIN comidas ON pedidosconcomidas.comida_id = comidas.comida_id INNER JOIN estadopedido ON pedidos.estadopedido  = estadopedido.estado_id INNER JOIN pago ON pedidos.formaPago = pago.pago_id WHERE pedidos.pedido_id = ?"
const pedidoPorUsuario = "SELECT usuario_id, pedidos.pedido_id, pedidosconcomidas.comida_id, cantidad, precioUnidad, pedidos.hour, pedidos.estadopedido, pago.formaPago, description, name FROM pedidosconcomidas INNER JOIN pedidos ON pedidosconcomidas.pedido_id = pedidos.pedido_id INNER JOIN comidas ON pedidosconcomidas.comida_id = comidas.comida_id INNER JOIN estadopedido ON pedidos.estadopedido  = estadopedido.estado_id INNER JOIN pago ON pedidos.formaPago = pago.pago_id WHERE usuario_id = ? AND pedidos.pedido_id = ?"



module.exports.agregarPedido = async function (usuario_id, formaPago, detalle, orderDescription = '') {
    try {

        let idsYcantidad = []
        let precio = 0

        for (let a = 0; a < detalle.length; a++) {
            const [datosComida] = await sql.query(comidaDatos, { replacements: [detalle[a].comida_id] })
            precio += datosComida[0].price
            idsYcantidad.push([detalle[a].comida_id, detalle[a].cantidad])
        }
        await sql.query(insertarPedido, { replacements: [usuario_id, formaPago, orderDescription] })
        const [datosPedido] = await sql.query(pedidoDatos, { replacements: [usuario_id] })


        for (let i = 0; i < idsYcantidad.length; i++) {
            await sql.query(comidas_y_pedidos, { replacements: [datosPedido[datosPedido.length - 1].pedido_id, idsYcantidad[i][0], idsYcantidad[i][1], precio] })
        }
        return 'pedido agregado correctamente'
    } catch (error) {
        throw new Error(error)
    }

}


module.exports.mostrarTodosLosPedidos = async function () {
    try {
        const [resultado] = await sql.query(todosLosPedidos)
        return resultado
    } catch (error) {
        throw new Error(error)
    }
}

module.exports.ObtenerPedidoID = async function (pedido_id) {
    try {
        const resultado = await sql.query(pedidoPorID, { replacements: [pedido_id] })
        return (resultado)
    } catch {
        throw new Error("pedido o ID no encontrado")
    }
}

module.exports.mostrarPedidoUsuario = async function (usuario_id, pedido_id) {
    try {
        const resultado = await sql.query(pedidoPorUsuario, { replacements: [usuario_id, pedido_id] })
        return resultado
    } catch {
        throw new Error("error al mostrar el pedido")
    }
}


module.exports.modificarEstado = async function (estadopedido, pedido_id) {
    try {
        const pedidoEstado = await sql.query(modificarEstadoPedido, { replacements: [estadopedido, pedido_id] })
        return pedidoEstado
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.eliminarPedidoID = async function (pedido_id) {
    try {
        const [resultado] = await sql.query(cancelarPedido, { replacements: [pedido_id] });
        return resultado

    } catch (error) {
        throw new Error(error.message)
    }

}


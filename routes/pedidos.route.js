const express = require("express")
const router = express.Router();
const { mostrarTodosLosPedidos, agregarPedido, eliminarPedidoID, modificarEstado, mostrarPedidoUsuario, ObtenerPedidoID } = require("../services/pedidos.service")
const { verificarToken, verificarTokenUsuario } = require("../auth/autorizacion");



//OK
router.get("/", verificarToken, async (req, res, next) => {
    try {
        let pedidos = await mostrarTodosLosPedidos()
        res.status(200).json(pedidos)

    } catch (error) {
        next(res.status(500).error)
    }
})

router.get("/:pedido_id/:usuario_id", verificarTokenUsuario, async (req, res, next) => {
    try {
        let pedido_id = req.params.pedido_id
        let usuario_id = req.params.usuario_id
        let pedidosU = await mostrarPedidoUsuario(usuario_id, pedido_id)
        res.status(200).json(pedidosU)

    } catch (error) {
        next(res.status(500).error)
    }
})


//ok

router.get("/:pedido_id", verificarToken, async (req, res, next) => {
    try {
        let pedido_id = req.params.pedido_id
        let [pedidoID] = await ObtenerPedidoID(pedido_id);
        res.status(200).json(pedidoID)
        console.log(pedidoID)
    } catch {
        next({ status: 404, error: "el pedido seleccionado no existe" })

    }
})


router.post('/usuario', verificarTokenUsuario, async (req, res, next) => {
    let { usuario_id, formaPago, detalle, orderDescription } = req.body;

    try {
        const nuevoPedido = await agregarPedido(usuario_id, formaPago, detalle, orderDescription)
        res.json(nuevoPedido);

    } catch (error) {
        next({ numero: 400, error: error.message })
    }



})

router.post('/admin', verificarToken, async (req, res, next) => {
    let { usuario_id, formaPago, detalle, orderDescription } = req.body;

    try {
        const nuevoPedido = await agregarPedido(usuario_id, formaPago, detalle, orderDescription)
        res.json(nuevoPedido);

    } catch (error) {
        next({ numero: 400, error: error.message })
    }



})



//OK

router.put("/:pedido_id", verificarToken, async (req, res) => {
    let pedidoID = req.params.pedido_id;
    let { estadopedido } = req.body;
    try {
        let actualizarPedido = await modificarEstado(estadopedido, pedidoID)
        res.status(204).json(actualizarPedido)
    } catch (error) {
        res.status(404).json(error + " error al actualizar el estado del pedido")
    }
});


//OK
router.delete("/:pedido_id", verificarToken, async (req, res) => {
    try {
        let idpedido = req.params.pedido_id
        let borrarPedido = await eliminarPedidoID(idpedido)
        res.status(204).send("pedido cancelado")
        console.log(borrarPedido)
    } catch (error) {
        res.status(404).json({ error: "error al cancelar el pedido" })
    }
})



module.exports = router
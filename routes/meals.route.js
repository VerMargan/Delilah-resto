const express = require("express")
const router = express.Router();
const sql = require("../db/connection")
const mealService = require("../services/meals.service")
const { verificarToken } = require("../auth/autorizacion")



router.get("/", async (req, res, next) => {
    try {
        let comidas = await mealService.mostrarTodoElMenu()
        res.status(200).json(comidas)
    } catch (error) {
        next({ status: 404, error })
    }
})

router.get("/:comida_id", async (req, res, next) => {
    let comida_id = req.params.comida_id
    try {
        let [plato] = await mealService.ObtenerComidasPorID(comida_id);
        res.status(200).json(plato)
    } catch {
        next({ status: 404, error: "el plato seleccionado no existe" })

    }
})

router.post("/", verificarToken, async (req, res, next) => {
    let { name, photoURL, description, price } = req.body;
    try {
        let nuevoPlato = await mealService.agregarComida(name, photoURL, description, price)
        res.status(201).send("nuevo plato ingresado!")
        res.json(nuevoPlato)
    } catch {
        next({ status: 400, error: "error al ingresar nuevo plato" })

    }

})


router.put("/:comida_id", verificarToken, async (req, res, next) => {
    let comida_id = req.params.comida_id;
    let { name, photoURL, description, price } = req.body;
    try {
        const resultado = await mealService.modificarComida(name, photoURL, description, price, comida_id)
        res.status(204).send("se ha actualizado el plato correctamente")
        res.json(resultado)
    } catch (error) {
        next({ status: 400, error: "error al actualizar el plato" })
    }
});


router.delete("/:comida_id", verificarToken, async (req, res, next) => {
    let comida_id = req.params.comida_id
    try {
        let plato = await mealService.borrarComidaID(comida_id);
        res.status(200).send("el plato se ha deshabilitado!")

    } catch {
        next({ status: 400, error: "error al deshabilitar el plato" })
    }
})


module.exports = router
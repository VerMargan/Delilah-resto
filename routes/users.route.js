const express = require("express")
const router = express.Router();
const userService = require("../services/user.service")



router.post("/login", async (req, res, next) => {
    let { userName, mail, password } = req.body
    try {
        const resultado = await userService.loguearse(userName, mail, password)
        res.status(200).json(resultado)
    } catch {
        next({ status: 401 }, res.send("usuario o contraseña inválida"))
    }
})


router.post("/register", async (req, res) => {
    let { userName, fullName, mail, telephone, address, password } = req.body
    try {
        let nuevoUsuario = await userService.registrarse(userName, fullName, mail, telephone, address, password)
        console.log(nuevoUsuario)
        res.status(200).json("se ha registrado con éxito")

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ err: error.message })
    }

})





module.exports = router
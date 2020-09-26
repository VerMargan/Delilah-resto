const jwt = require("jsonwebtoken")
require('dotenv').config()



module.exports.verificarTokenUsuario = async function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const verificar = jwt.verify(token, process.env.CLAVE_USUARIO, (err, decoded) => {
            decoded ? next() : next(err)
        });
        return verificar
    } catch {
        next({ numero: 400, error: "ingresar el token" })
    }

}

module.exports.verificarToken = async function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const verificar = jwt.verify(token, process.env.CLAVE_JWT, (err, decoded) => {
            decoded ? next() : next(err)
        });
        return verificar
    } catch {
        next({ numero: 400, error: "ingresar el token" })
    }

}


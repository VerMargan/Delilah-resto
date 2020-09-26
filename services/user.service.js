const sql = require("../db/connection")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const registro = "INSERT INTO usuarios (userName, fullName,mail,telephone, address, password,administrator) VALUES (?,?,?,?,?,?,?)"
const login = "SELECT * FROM usuarios WHERE (userName= ? OR mail=?) AND password =?"
const cambiarRol = "UPDATE usuarios SET administrator =? WHERE mail =?"



module.exports.loguearse = async function (userName, mail, password) {
    try {
        const [resultado] = await sql.query(login, { replacements: [userName, mail, password] })
        if (resultado.length > 0 && resultado[0].administrator === 1) {
            const token = jwt.sign({ userName: resultado[0].usuario_id }, process.env.CLAVE_JWT)
            return { token, usuario_id: resultado[0].usuario_id }
        } else if (resultado.length > 0 && resultado[0].administrator === 0) {
            const token = jwt.sign({ userName: resultado[0].usuario_id }, process.env.CLAVE_USUARIO)
            return { token, usuario_id: resultado[0].usuario_id }
        }
        throw new Error("usuario o contraseña incorrecta")
    } catch (error) {
        throw new Error(error)
    }
}


module.exports.registrarse = async function (userName, fullName, mail, telephone, address, password, administrator) {
    try {
        const resultado = await sql.query(registro, { replacements: [userName, fullName, mail, telephone, address, password, administrator = false] })
        return resultado
    } catch {
        throw new Error("datos inválidos o usuario existente")
    }
}
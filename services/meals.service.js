const sql = require("../db/connection")
const comidaModificada = "UPDATE comidas SET name = ?, photoURL = ?, description=?, price= ? WHERE comida_id = ?"
const comidaPorID = "SELECT * FROM comidas WHERE comida_id = ?"
const nuevaComida = "INSERT INTO comidas (name, photoURL,description,price) VALUES (?,?,?,?)"
const borrarComida = "UPDATE comidas SET inhabilitada = true WHERE comida_id =?"
const todoMenu = "SELECT * FROM comidas"

module.exports.mostrarTodoElMenu = async function () {
    try {
        const [resultado] = await sql.query(todoMenu)
        return resultado
    } catch (error) {
        throw new Error(error)
    }
}


module.exports.ObtenerComidasPorID = async function (comida_id) {
    try {
        const resultado = await sql.query(comidaPorID, { replacements: [comida_id] })
        return resultado
    } catch {
        throw new Error("comida no encontrada")
    }
}

module.exports.modificarComida = async function (name, photoURL, description, price, comida_id) {

    try {
        const resultado = await sql.query(comidaModificada, { replacements: [name, photoURL, description, price, comida_id] })
        console.log(resultado)
        if (resultado.ok > 0) {
            return "el plato seleccionado se ha modificado"
        }
    } catch {
        throw new Error("el plato seleccionado no se ha encontrado")
    }

}

module.exports.agregarComida = async function (name, photoURL, description, price) {
    try {
        const resultado = await sql.query(nuevaComida, { replacements: [name, photoURL, description, price] })
        return resultado
    } catch {
        throw new Error("error al ingresar un nuevo plato")
    }
}

module.exports.borrarComidaID = async function (comida_id) {
    try {
        const resultado = await sql.query(borrarComida, { replacements: [comida_id] })
        return resultado
    } catch {
        throw new Error("comida no encontrada")
    }
}
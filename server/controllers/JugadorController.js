import Jugador from "../models/JugadorModel.js";

const crear_jugador = (req, res) => {
    res.status(200).json({msg: "jugador Creado"})
}

const buscar_jugador = (req, res) => {
    res.status(200).json({msg: "jugador buscado"})
}

const editar_jugador = (req, res) => {
    res.status(200).json({msg: "jugador editar"})
};

export {
    crear_jugador,
    buscar_jugador,
    editar_jugador
}
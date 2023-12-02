import Partido from "../models/PartidoModel.js";

const crear_partido = (req, res) => {
    console.log("creando partido")
}

const mostrar_partido = (req, res) => {
    console.log("buscando partido")
}

const editar_partido = (req, res) => {
    console.log("editando partido")
};

export {
    crear_partido,
    mostrar_partido,
    editar_partido
}
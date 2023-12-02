import Empleado from "../models/EmpleadoModel.js";

const crear_empleado = (req, res) => {
    console.log("creando empleado")
}

const buscar_empleado = (req, res) => {
    console.log("buscando empleado")
}

const editar_empleado = (req, res) => {
    console.log("editando empleado")
};

export {
    crear_empleado,
    buscar_empleado,
    editar_empleado
}
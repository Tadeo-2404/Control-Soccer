import Empleado from "../models/EmpleadoModel.js";
import { Op } from 'sequelize';

const crear_empleado = async (req, res) => {
    const { nombre, tipo, correo, direccion, telefono } = req.body;

    if(!nombre || !tipo || !correo || !direccion || !telefono) {
       return res.status(400).json({msg: "Todos los campos son obligatorios"});
    }

    try {
        const response = await Empleado.create(req.body);
        res.json(response);
    } catch (error) {
        console.log("no se pudo crear el empleado")
    }
}

const buscar_empleado = async (req, res) => {
    const { limite, id, nombre, tipo, correo, telefono } = req.query; //leer parametros

    //asignar valores a where
    let where = {};
    if(id) where.codigo = id;
    if(nombre) where.nombre = { [Op.like]: `%${nombre}%` };
    if(telefono) where.telefono = { [Op.like]: `%${telefono}%` };
    if(correo) where.correo = { [Op.like]: `%${correo}%` };
    if(tipo) where.tipo = { [Op.like]: `%${tipo}%` };

    //realizar consulta a la base de datos
    const consulta = await Empleado.findAll({where,
    limit: limite})

    res.status(200).json(consulta);
}

const editar_empleado = async (req, res) => {
    const { id, nombre, correo, telefono } = req.body; // leer datos
  
    // Validar si el ID es válido
    if (!id) {
      const error = new Error("El ID es obligatorio");
      return res.status(400).json({ msg: error.message });
    }
  
    // Buscar el cliente por su ID
    const empleado = await Empleado.findOne({ where: { codigo: id } });
  
    // Validar si el empleado existe
    if (!empleado) {
      const error = new Error("El empleado no existe");
      return res.status(400).json({ msg: error.message });
    }
  
    // Validar campos no vacíos
    if (!nombre && !correo && !telefono) {
      const error = new Error("Todos los campos son obligatorios");
      return res.status(400).json({ msg: error.message });
    }
  
    // Comprobar si el correo electrónico que se quiere actualizar es diferente del correo electrónico actual del empleado
    if (correo !== empleado.correo) {
      // Buscar correo para validar si existe
      const correoExiste = await Empleado.findOne({ where: { correo: correo } });
  
      // Validar si existe lanza error
      if (correoExiste) {
        const error = new Error("Este correo ya está registrado");
        return res.status(400).json({ msg: error.message });
      }
    }
  
    empleado.nombre = nombre || empleado.nombre;
    empleado.correo = correo || empleado.correo;
    empleado.telefono = telefono || empleado.telefono;
  
    try {
      await empleado.save();
      return res.status(200).json({ msg: "Cuenta editada exitosamente" });
    } catch (error) {
      console.log(error);
    }};

export {
    crear_empleado,
    buscar_empleado,
    editar_empleado
}
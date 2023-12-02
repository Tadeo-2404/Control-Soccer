import Jugador from "../models/JugadorModel.js";
import { Op } from 'sequelize';

const crear_jugador = async (req, res) => {
    const { nombre, fecha_nacimiento, posicion, categoria, numero } = req.body;

    if(!nombre || !fecha_nacimiento || !posicion || !categoria || !numero) {
       return res.status(400).json({msg: "Todos los campos son obligatorios"});
    }

    try {
        const response = await Jugador.create(req.body);
        res.json(response);
    } catch (error) {
        console.log("no se pudo crear el jugador")
    }
}

const buscar_jugador = async (req, res) => {
    const { limite, id, nombre, fecha_nacimiento, posicion, numero, categoria } = req.query; //leer parametros

    //asignar valores a where
    let where = {};
    if(id) where.codigo = id;
    if(nombre) where.nombre = { [Op.like]: `%${nombre}%` };
    if(numero) where.numero = { [Op.like]: `%${numero}%` };
    if(categoria) where.categoria = { [Op.like]: `%${categoria}%` };
    if(posicion) where.posicion = { [Op.like]: `%${posicion}%` };
    if(fecha_nacimiento) where.fecha_nacimiento = { [Op.like]: `%${fecha_nacimiento}%` };

    //realizar consulta a la base de datos
    const consulta = await Jugador.findAll({where,
    limit: limite})

    res.status(200).json(consulta);
}

const editar_jugador = async (req, res) => {
    const { id, nombre, fecha_nacimiento, posicion, categoria, numero } = req.body; // leer datos
  
    // Validar si el ID es válido
    if (!id) {
      const error = new Error("El ID es obligatorio");
      return res.status(400).json({ msg: error.message });
    }
  
    // Buscar el cliente por su ID
    const jugador = await Jugador.findOne({ where: { id: id } });
  
    // Validar si el jugador existe
    if (!jugador) {
      const error = new Error("El jugador no existe");
      return res.status(400).json({ msg: error.message });
    }
  
    // Validar campos no vacíos
    if (!nombre && !posicion && !numero && !categoria && !fecha_nacimiento) {
      const error = new Error("Todos los campos son obligatorios");
      return res.status(400).json({ msg: error.message });
    }
  
    jugador.nombre = nombre || jugador.nombre;
    jugador.posicion = posicion || jugador.posicion;
    jugador.numero = numero || jugador.numero;
    jugador.fecha_nacimiento = fecha_nacimiento || jugador.fecha_nacimiento;
    jugador.categoria = categoria || jugador.categoria;
  
    try {
      await jugador.save();
      return res.status(200).json({ msg: "Cuenta editada exitosamente" });
    } catch (error) {
      console.log(error);
    }};

export {
    crear_jugador,
    buscar_jugador,
    editar_jugador
}
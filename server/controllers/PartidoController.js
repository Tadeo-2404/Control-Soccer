import Partido from "../models/PartidoModel.js";
import { Op } from 'sequelize';

const crear_partido = async (req, res) => {
    const { categoria, fecha, hora, rival, sede, id_convocados } = req.body;

    if(!categoria || !fecha || !hora || !rival || !sede || !id_convocados) {
        return res.status(400).json({msg: "Todos los campos son obligatorios"});
    }

    try {
        const response = await Partido.create(req.body);
        res.status(400).json(response)
    } catch (error) {
        console.log(error)
    }
}

const mostrar_partido = async (req, res) => {
    const { limite, id, categoria, rival, sede } = req.query; //leer parametros

    //asignar valores a where
    let where = {};
    if(id) where.id = id;
    if(categoria) where.categoria = { [Op.like]: `%${categoria}%` };
    if(rival) where.rival = { [Op.like]: `%${rival}%` };
    if(sede) where.sede = { [Op.like]: `%${sede}%` };

    //realizar consulta a la base de datos
    const consulta = await Partido.findAll({where,
    limit: limite})

    res.status(200).json(consulta);
}

const editar_partido = async (req, res) => {
    const { id, categoria, fecha, hora, rival, sede, id_convocados } = req.body;
  
    // Validar si el ID es válido
    if (!id) {
      const error = new Error("El ID es obligatorio");
      return res.status(400).json({ msg: error.message });
    }
  
    // Buscar el cliente por su ID
    const partido = await Partido.findOne({ where: { id: id } });
  
    // Validar si el partido existe
    if (!partido) {
      const error = new Error("El partido no existe");
      return res.status(400).json({ msg: error.message });
    }
  
    // Validar campos no vacíos
    if (!categoria && !fecha && !hora && !rival && !sede && !id_convocados) {
      const error = new Error("Todos los campos son obligatorios");
      return res.status(400).json({ msg: error.message });
    }
  
    partido.categoria = categoria || partido.categoria;
    partido.fecha = fecha || partido.fecha;
    partido.hora = hora || partido.hora;
    partido.rival = rival || partido.rival;
    partido.sede = sede || partido.sede;
    partido.id_convocados = id_convocados || partido.id_convocados;
  
    try {
      await partido.save();
      return res.status(200).json({ msg: "Partido editado exitosamente" });
    } catch (error) {
      console.log(error);
  }
};

export {
    crear_partido,
    mostrar_partido,
    editar_partido
}
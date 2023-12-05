import Cobro from "../models/CobroModel.js";

const crear_cobro = async (req, res) => {
    const { id_empleado, id_deudor, telefono, id_cobro_concepto, fecha } = req.body;

    if(!id_empleado || !id_deudor || !telefono || !id_cobro_concepto || !fecha) {
        return res.status(400).json({msg: "Todos los campos son obligatorios"});
    }

    try {
        const response = await Cobro.create(req.body);
        res.status(400).json(response)
    } catch (error) {
        console.log(error)
    }
}

const mostrar_cobro = async (req, res) => {
    const { limite, folio, id_empleado, id_deudor, telefono, id_cobro_concepto, fecha } = req.query; //leer parametros

    //asignar valores a where
    let where = {};
    if(folio) where.folio = folio;
    if(id_empleado) where.id_empleado = id_empleado;
    if(id_deudor) where.id_deudor = id_deudor;
    if(id_cobro_concepto) where.id_cobro_concepto = id_cobro_concepto;
    if(telefono) where.telefono = { [Op.like]: `%${telefono}%` };
    if(fecha) where.fecha = { [Op.like]: `%${fecha}%` };

    //realizar consulta a la base de datos
    const consulta = await Cobro.findAll({where,
    limit: limite})

    res.status(200).json(consulta);
}

export {
    crear_cobro,
    mostrar_cobro
}
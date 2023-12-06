import React from 'react'

const MostrarCobro = () => {
  const [cobro, setCobro] = useState([]);

  const obtener_cobro = async () => {
    const url = "http://localhost:3000/cobro/buscar";
    const cobro = await axios.get(url);
    setCobro(cobro.data);
  };

  useEffect(() => {
    obtener_cobro();
  }, []);

  return (
    <div>
      {cobro.length > 0 ? (
        cobro.map((cobro) => (
          <div key={cobro.folio} className="container_partido">
            <p>
              <span>nombre: </span>
              {cobro.folio}
            </p>
            <p>
              <span>telefono: </span>
              {cobro.telefono}
            </p>
            <p>
              <span>Deudor: </span>
              {cobro.id_deudor}
            </p>
            <p>
              <span>Fecha: </span>
              {cobro.fecha}
            </p>
          </div>
        ))
      ) : (
        <div>
          <p>no hay cobros que mostrar</p>
        </div>
      )}
    </div>
  )
}

export default MostrarCobro

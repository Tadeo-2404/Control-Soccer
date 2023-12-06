import axios from "axios";
import { useEffect, useState } from "react";

const MostrarPartido = () => {
  const [partidos, setPartidos] = useState([]);

  const obtener_partidos = async () => {
    const url = "http://localhost:3000/partido/mostrar";
    const partidos = await axios.get(url);
    setPartidos(partidos.data);
  };

  useEffect(() => {
    obtener_partidos();
  }, []);

  return (
    <div>
      {partidos.length > 0 ? (
        partidos.map((partido) => (
          <div key={partido.id} className="container_partido">
            <p>
              <span>categoria: </span>
              {partido.categoria}
            </p>
            <p>
              <span>fecha: </span>
              {partido.fecha}
            </p>
            <p>
              <span>hora: </span>
              {partido.hora}
            </p>
            <p>
              <span>rival: </span>
              {partido.rival}
            </p>
            <p>
              <span>sede: </span>
              {partido.sede}
            </p>
          </div>
        ))
      ) : (
        <div>
          <p>no hay partidos que mostrar</p>
        </div>
      )}
    </div>
  );
};

export default MostrarPartido;

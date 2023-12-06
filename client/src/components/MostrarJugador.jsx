import axios from "axios";
import { useEffect, useState } from "react";

const MostrarJugador = () => {
  const [jugador, setjugador] = useState([]);

  const obtener_jugador = async () => {
    const url = "http://localhost:3000/jugador/buscar";
    const jugador = await axios.get(url);
    setjugador(jugador.data);
  };

  useEffect(() => {
    obtener_jugador();
  }, []);

  return (
    <div>
      {jugador.length > 0 ? (
        jugador.map((jugador) => (
          <div key={jugador.id} className="container_partido">
            <p>
              <span>nombre: </span>
              {jugador.nombre}
            </p>
            <p>
              <span>fecha: </span>
              {jugador.fecha_nacimiento}
            </p>
            <p>
              <span>posicion: </span>
              {jugador.posicion}
            </p>
            <p>
              <span>categoria: </span>
              {jugador.categoria}
            </p>
            <p>
              <span>numero: </span>
              {jugador.numero}
            </p>
          </div>
        ))
      ) : (
        <div>
          <p>no hay jugadorres que mostrar</p>
        </div>
      )}
    </div>
  );
};

export default MostrarJugador;

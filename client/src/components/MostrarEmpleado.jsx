import axios from "axios";
import { useEffect, useState } from "react";

const MostrarEmpleado = () => {
  const [empleado, setEmpleado] = useState([]);

  const obtener_empleado = async () => {
    const url = "http://localhost:3000/empleado/buscar";
    const empleado = await axios.get(url);
    setEmpleado(empleado.data);
  };

  useEffect(() => {
    obtener_empleado();
  }, []);

  return (
    <div>
      {empleado.length > 0 ? (
        empleado.map((empleado) => (
          <div key={empleado.id} className="container_partido">
            <p>
              <span>nombre: </span>
              {empleado.nombre}
            </p>
            <p>
              <span>tipo: </span>
              {empleado.tipo}
            </p>
            <p>
              <span>posicion: </span>
              {empleado.posicion}
            </p>
            <p>
              <span>telefono: </span>
              {empleado.telefono}
            </p>
            <p>
              <span>correo: </span>
              {empleado.correo}
            </p>
            <p>
              <span>direccion: </span>
              {empleado.direccion}
            </p>
          </div>
        ))
      ) : (
        <div>
          <p>no hay empleados que mostrar</p>
        </div>
      )}
    </div>
  );
};

export default MostrarEmpleado;

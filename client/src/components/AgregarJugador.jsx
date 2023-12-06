import axios from "axios";
import { useState } from "react";

const AgregarJugador = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [posicion, setPosicion] = useState("");
  const [numero_camiseta, setNumero_camiseta] = useState("");
  const [categoria, setCategoria] = useState("");

  const hadleCategory = (input) => {
    setCategoria(input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      nombre,
      fecha_nacimiento: fecha,
      posicion,
      numero: numero_camiseta,
      categoria
    }

    try {
      const url = "http://localhost:3000/jugador/crear";
      const response = await axios.post(url, data);
      console.log("response", response);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div class="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Registro de Jugador</h1>
          <div class="input-box">
            <input type="text" placeholder="Nombre Completo" required onChange={(event) => setNombre(event.target.value)} />
          </div>
          <div class="input-box">
            <input type="date" placeholder="Fecha nacimiento" required onChange={(event) => setFecha(event.target.value)}/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Posicion" required onChange={(event) => setPosicion(event.target.value)}/>
          </div>
          <div class="input-box">
            <input type="number" placeholder="Numero Camisa" onChange={(event) => setNumero_camiseta(event.target.value)}/>
          </div>
          <div class="input-box">
            <select
              name="categoria"
              id="categoria"
              class="box"
              onChange={(event) => hadleCategory(event.target.value)}
            >
              <option value="" unselectable="" class="vl">
                Seleccionar
              </option>
              <option value="categoria sub-15" class="vl">
                Categoria sub-15
              </option>
              <option value="categoria sub-17" class="vl">
                Categoria sub-17
              </option>
              <option value="categoria sub-18" class="vl">
                Categoria sub-18
              </option>
              <option value="categoria sub-21" class="vl">
                Categoria sub-21
              </option>
            </select>
          </div>

          <button type="submit" class="btn">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarJugador;

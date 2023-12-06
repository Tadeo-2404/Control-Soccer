import {useState} from 'react'
import axios from "axios"

const AgregarEmpleado = () => {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");

    const handleTipo = (input) => {
      setTipo(input);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        nombre,
        tipo,
        telefono,
        correo: email,
        direccion
      }
  
      try {
        const url = "http://localhost:3000/empleado/crear";
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
            <h1>Registro de Empleado</h1>
            <div class="input-box">
                <input type="text" placeholder="Nombre Completo" required onChange={(event) => setNombre(event.target.value)}/>
            </div>
            <div>
                <select name="Tipo" id="Tipo" class="box" onChange={(event) => handleTipo(event.target.value)}>
                    <option value="administrativo" class="vl">Administrativo</option>
                    <option value="mantenimiento" class="vl">Mantenimiento</option>
                </select>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Telefono" required onChange={(event) => setTelefono(event.target.value)}/>
            </div>
            <div class="input-box">
                <input type="email" placeholder="E-mail" required onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Direccion" required onChange={(event) => setDireccion(event.target.value)}/>
            </div>

            <button type="submit" class="btn">Registrar</button>
        </form>
    </div>
    </div>
  )
}

export default AgregarEmpleado

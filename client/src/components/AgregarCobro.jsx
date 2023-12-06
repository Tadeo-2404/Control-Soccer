import {useState} from 'react'
import axios from "axios"

const AgregarCobro = () => {
    const [id_deudor, setId_deudor] = useState("");
    const [telefono, setTelefono] = useState("");
    const [conceptos, setConceptos] = useState([]);
    const [showConceptos, setShowConceptos] = useState(false);
    let conceptosArr = [];

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        id_deudor,
        telefono,
        conceptos: conceptosArr
      };
  
      console.log(data)
   
      try {
        const url = "http://localhost:3000/cobro/crear";
        const response = await axios.post(url, data);
        console.log("response", response)
      } catch (error) {
        console.log("error", error);
      }
    };
  
    const getConceptos = async (input) => {
      setConceptos[[]];
      conceptosArr = []
      try {
        const url = `http://localhost:3000/cobro/buscar?folio=${input}`;
        const { data } = await axios.get(url);
        setConceptos(data);
        setShowConceptos(true);
        console.log(conceptos.length);
      } catch (error) {
        console.log(error);
      }
    };
  
    const hadleCategory = (input) => {
      setConceptos(input);
      getConceptos(input);
    };
    
    const handleSelectConceptos = (id) => {
      const concepto = conceptos.find(p => p.id === id);
      
      if (concepto) {
          conceptosArr.push(concepto.id);
          console.log(conceptosArr)
      }
  }

  return (
    <div>
      <div class="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Registro de Cobros</h1>
          <div class="input-box">
            <input onChange={(event) => setId_deudor(event.target.value)} type="text" placeholder="ID_Deudor" required />
          </div>
          <div class="input-box">
            <input onChange={(event) => setTelefono(event.target.value)} type="text" placeholder="Telefono" required />
          </div>
          <div>
            <select name="Conceptos" id="Conceptos" class="box"
            onChange={(event) => hadleCategory(event.target.value)}>
              <option value="administrativo" class="vl">
                Mensualidad
              </option>
              <option value="mantenimiento" class="vl">
                Renta cancha
              </option>
            </select>
          </div>
          <button type="submit" class="btn" onClick={() => handleSelectConceptos(conceptos.id)} >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AgregarCobro
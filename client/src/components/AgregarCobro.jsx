import React from 'react'

const AgregarCobro = () => {
  return (
    <div>
      <div class="wrapper">
        <form action="">
          <h1>Registro de Cobros</h1>
          <div class="input-box">
            <input type="text" placeholder="ID" required />
          </div>
          <div>
            <select name="Conceptos" id="Conceptos" class="box">
              <option value="administrativo" class="vl">
                Mensualidad
              </option>
              <option value="mantenimiento" class="vl">
                Renta cancha
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
}

export default AgregarCobro
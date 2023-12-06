import React from 'react'

const AgregarEmpleado = () => {
  return (
    <div>
      <div class="wrapper">
        <form action="">
            <h1>Registro de Empleado</h1>
            <div class="input-box">
                <input type="text" placeholder="Nombre Completo" required/>
            </div>
            <div>
                <select name="Tipo" id="Tipo" class="box">
                    <option value="administrativo" class="vl">Administrativo</option>
                    <option value="mantenimiento" class="vl">Mantenimiento</option>
                </select>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Telefono" required/>
            </div>
            <div class="input-box">
                <input type="email" placeholder="E-mail" required/>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Direccion" required/>
            </div>

            <button type="submit" class="btn">Registrar</button>
        </form>
    </div>
    </div>
  )
}

export default AgregarEmpleado

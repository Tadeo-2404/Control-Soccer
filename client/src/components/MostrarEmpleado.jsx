import React from 'react'

const MostrarEmpleado = () => {
  return (
    <div>
      <form action="">
        <div class="wrapper">
            <h1>Busqueda de Empleado</h1>
            <div class="search">
                <input type="search" placeholder="Buscar nombre o id"/>
                <button type="submit" class="btnn">Editar</button>
            </div>
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
        </div>
    </form>
    </div>
  )
}

export default MostrarEmpleado

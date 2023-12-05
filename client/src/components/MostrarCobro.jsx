import React from 'react'

const MostrarCobro = () => {
  return (
    <div>
      <form action="">
        <div class="wrapper">
            <h1>Busqueda de Cobro</h1>
            <div class="search">
                <input type="search" placeholder="Buscar nombre o id"/>
                <button type="submit" class="btnn">Editar</button>
            </div>
            <div class="input-box">
                <input type="text" placeholder="ID"/>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Conceptos"/>
            </div>
        </div>
    </form>
    </div>
  )
}

export default MostrarCobro

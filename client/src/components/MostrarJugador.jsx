import React from 'react'

const MostrarJugador = () => {
  return (
    <div>
      <form action="">
        <div class="wrapper">
            <h1>Busqueda de Jugador</h1>
            <div class="search">
                <input type="search" placeholder="Buscar nombre o id"/>
                <button type="submit" class="btnn">Editar</button>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Nombre Completo" required/>
            </div>
            <div class="input-box">
                <input type="date" placeholder="Fecha nacimiento" required/>
            </div>
            <div class="input-box">
                <input type="email" placeholder="E-mail" required/>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Telefono"/>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Posicion" required/>
            </div>
            <div class="input-box">
                <input type="number" placeholder="Numero Camisa"/>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Categoria"/>
            </div>

            <button type="submit" class="btn">Registrar</button>
        </div>
    </form>
    </div>
  )
}

export default MostrarJugador

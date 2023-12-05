const AgregarJugador = () => {
  return (
    <div>
      <div class="wrapper">
        <form action="">
          <h1>Registro de Jugador</h1>
          <div class="input-box">
            <input type="text" placeholder="Nombre Completo" required />
          </div>
          <div class="input-box">
            <input type="date" placeholder="Fecha nacimiento" required />
          </div>
          <div class="input-box">
            <input type="email" placeholder="E-mail" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Telefono" />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Posicion" required />
          </div>
          <div class="input-box">
            <input type="number" placeholder="Numero Camisa" />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Categoria" />
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

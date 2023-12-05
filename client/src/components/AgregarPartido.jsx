
const AgregarPartido = () => {
  return (
    <div class="wrapper">
      <form action="">
        <h1>Registro de Partidos</h1>
        <div class="input-box">
          <input type="text" placeholder="Categoria" required />
        </div>
        <div class="input-box">
          <input type="date" placeholder="Fecha" required />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Hora" required />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Rival" required />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Sede" required />
        </div>
        <div>
          <select name="Convovatoria" id="Convovatoria" class="box">
            <option value="Categoria sub-15" class="vl">
              Categoria sub-15
            </option>
            <option value="Categoria sub-17" class="vl">
              Categoria sub-17
            </option>
            <option value="Categoria sub-18" class="vl">
              Categoria sub-18
            </option>
            <option value="Categoria sub-21" class="vl">
              Categoria sub-21
            </option>
          </select>
        </div>

        <button type="submit" class="btn">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default AgregarPartido
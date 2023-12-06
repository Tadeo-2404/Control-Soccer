import axios from "axios";
import { useState } from "react";

const AgregarPartido = () => {
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [rival, setRival] = useState("");
  const [sede, setSede] = useState("");
  const [players, setPlayers] = useState([]);
  const [showPlayers, setShowPlayers] = useState(false);
  let playersArr = [];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      categoria,
      fecha,
      hora,
      rival,
      sede,
      playersArr
    };

    try {
      const url = "http://localhost:3000/partido/crear";
      const response = await axios.post(url, data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayers = async (input) => {
    setPlayers[[]];
    playersArr = []
    try {
      const url = `http://localhost:3000/jugador/buscar?categoria=${input}`;
      const { data } = await axios.get(url);
      setPlayers(data);
      setShowPlayers(true);
      console.log(players.length);
    } catch (error) {
      console.log(error);
    }
  };

  const hadleCategory = (input) => {
    setCategoria(input);
    getPlayers(input);
  };
  
  const handleSelectPlayer = (id) => {
    const player = players.find(p => p.id === id);
    
    if (player) {
        playersArr.push(player.id);
        console.log(playersArr)
    }
}
  
  
  return (
    <div class="wrapper">
      <form action="" onSubmit={handleSubmit}>
        <h1>Registro de Partidos</h1>
        <div>
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
        <div class="input-box">
          <input
            type="date"
            placeholder="Fecha"
            required
            onChange={(event) => setFecha(event.target.value)}
          />
        </div>
        <div class="input-box">
          <input
            type="time"
            placeholder="Hora"
            required
            onChange={(event) => setHora(event.target.value)}
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            placeholder="Rival"
            name="rival"
            required
            onChange={(event) => setRival(event.target.value)}
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            placeholder="Sede"
            required
            onChange={(event) => setSede(event.target.value)}
          />
        </div>

        <div>
          {players.length > 0 ? (
            <div>
              <h2>Lista de Jugadores</h2>
              {players.map((player) => (
                <div key={player.id} className="player_show_container">
                  <p className="player_show_p">
                    <span>Nombre:</span>
                    {player.nombre}
                  </p>
                  <p className="player_show_p">
                    <span>Posicion:</span>
                    {player.posicion}
                  </p>
                  <button onClick={() => handleSelectPlayer(player.id)} type="button">Seleccionar</button>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <button type="submit" class="btn">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default AgregarPartido;

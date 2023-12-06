import AgregarJugador from "../components/AgregarJugador"
import MostrarJugador from "../components/MostrarJugador"
const Jugador = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
      <AgregarJugador/>
      <MostrarJugador/>
    </div>
  )
}

export default Jugador
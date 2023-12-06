import AgregarJugador from "../components/AgregarJugador"
import MostrarJugador from "../components/MostrarJugador"
const Jugador = () => {
  return (
    <div style={{display: 'flex'}}>
      <AgregarJugador/>
      <MostrarJugador/>
    </div>
  )
}

export default Jugador
import AgregarPartido from "../components/AgregarPartido"
import MostrarPartido from "../components/MostrarPartido"

const Partido = () => {
  return (
    <div style={{display: 'flex'}}>
      <AgregarPartido/>
      <MostrarPartido/>
    </div>
  )
}

export default Partido
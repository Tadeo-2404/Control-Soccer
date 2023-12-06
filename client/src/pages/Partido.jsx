import AgregarPartido from "../components/AgregarPartido"
import MostrarPartido from "../components/MostrarPartido"

const Partido = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
      <AgregarPartido/>
      <MostrarPartido/>
    </div>
  )
}

export default Partido
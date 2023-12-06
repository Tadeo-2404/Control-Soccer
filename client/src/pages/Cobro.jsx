import AgregarCobro from "../components/AgregarCobro"
import MostrarCobro from "../components/MostrarCobro"
const Cobro = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
      <AgregarCobro/>
      {/* <MostrarCobro/> */}
    </div>
  )
}

export default Cobro
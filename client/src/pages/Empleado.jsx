import AgregarEmpleado from "../components/AgregarEmpleado"
import MostrarEmpleado from "../components/MostrarEmpleado"
const Empleado = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
      <AgregarEmpleado/>
      <MostrarEmpleado/>
    </div>
  )
}

export default Empleado
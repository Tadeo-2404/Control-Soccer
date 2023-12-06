import AgregarEmpleado from "../components/AgregarEmpleado"
import MostrarEmpleado from "../components/MostrarEmpleado"
const Empleado = () => {
  return (
    <div style={{display: 'flex'}}>
      <AgregarEmpleado/>
      <MostrarEmpleado/>
    </div>
  )
}

export default Empleado
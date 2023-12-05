import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar_container">
        <Link to={"/"} className="navbar_link">
          Inicio
        </Link>
        <Link to={"/agregar-partido"} className="navbar_link">
          Agregar Partido
        </Link>
        <Link to={"/agregar-cobro"} className="navbar_link">
          Agregar Cobro
        </Link>
        <Link to={"/agregar-empleado"} className="navbar_link">
          Agregar Empleado
        </Link>
        <Link to={"/agregar-Jugador"} className="navbar_link">
          Agregar Jugador
        </Link>
    </div>
  )
}

export default NavBar
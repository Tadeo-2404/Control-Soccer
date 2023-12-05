import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar_container">
        <Link to={"/"} className="navbar_link">
          Inicio
        </Link>
        <Link to={"/partido"} className="navbar_link">
           Partido
        </Link>
        <Link to={"/cobro"} className="navbar_link">
           Cobro
        </Link>
        <Link to={"/empleado"} className="navbar_link">
           Empleado
        </Link>
        <Link to={"/jugador"} className="navbar_link">
           Jugador
        </Link>
    </div>
  )
}

export default NavBar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgregarPartido from "./components/AgregarPartido";
import "./App.css";
import AgregarCobro from "./components/AgregarCobro";
import TemplateLayout from "./layouts/TemplateLayout";
import Login from "./components/Login";
import Empleado from "./pages/Empleado";
import Jugador from "./pages/Jugador";
import Partido from "./pages/Partido";
import Cobro from "./pages/Cobro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateLayout />}>
          <Route index element={<Login />} />
          <Route path="/empleado" element={<Empleado/>} />
          <Route path="/jugador" element={<Jugador />} />
          <Route path="/partido" element={<Partido />} />
          <Route path="/cobro" element={<Cobro />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

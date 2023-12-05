import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgregarPartido from "./components/AgregarPartido";
import "./App.css";
import AgregarCobro from "./components/AgregarCobro";
import TemplateLayout from "./layouts/TemplateLayout";
import Login from "./components/Login";
import AgregarJugador from "./components/AgregarJugador";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateLayout />}>
          <Route index element={<Login />} />
          <Route path="/agregar-jugador" element={<AgregarJugador />} />
          <Route path="/agregar-partido" element={<AgregarPartido />} />
          <Route path="/agregar-cobro" element={<AgregarCobro />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

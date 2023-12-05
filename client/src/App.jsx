import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AgregarPartido from "./components/AgregarPartido";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/agregar-partido" element={<AgregarPartido />} />
      </Routes>
    </Router>
  );
}

export default App
 
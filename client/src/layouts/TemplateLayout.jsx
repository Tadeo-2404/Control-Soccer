import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const TemplateLayout = () => {
  return (
    <div>
      <NavBar/>
      <div className="template_layout_container">
        <Outlet/>
      </div>
    </div>
  );
}

export default TemplateLayout
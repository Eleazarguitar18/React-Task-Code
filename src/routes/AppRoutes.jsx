import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Registro from "../components/Registrar";
import TaskGeneral from "../components/TaskGeneral";
import HomePage from "../components/HomePage";
import NotFound from "../components/Notfound";
import InicioSesion from "../components/InicioSesion";
import CodigoVerificacion from "../components/CodigoVerificacion";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="EleazarReact/*"> */}
        <Route path="EleazarReact" element={<HomePage />}></Route>
        <Route path="EleazarReact/registro" element={<Registro />} />
        <Route
          path="EleazarReact/registroCodigo"
          element={<CodigoVerificacion />}
        />
        <Route path="EleazarReact/task" element={<TaskGeneral />} />
        <Route path="EleazarReact/inicioSesion" element={<InicioSesion />} />
        <Route path="*" element={<NotFound />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

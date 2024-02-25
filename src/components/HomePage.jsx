import React from "react";
import { useNavigate } from "react-router-dom";
export default function Incio() {
  const navigate = useNavigate();
  const Registrar = () => {
    navigate("registro");
  };
  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-white font-bold text-4xl mb-3 text-center">Incio</h1>
      <h4 className="text-white font-bold text-3xl mb-3 text-center">
        Bienvenido a la pagina
      </h4>
      <button
        onClick={Registrar}
        className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
      >
        Registrar
      </button>
    </div>
  );
}

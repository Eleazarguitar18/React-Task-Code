import { useState, useContext } from "react";
import { useFormik } from "formik";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
export default function CodigoVerificacion() {
  const navigate = useNavigate();
  const inicioSesion = () => {
    navigate("/EleazarReact/InicioSesion");
  };
  const { registro } = useContext(TaskContext);
  const formik = useFormik({
    initialValues: {
      codigo: "",
    },
    onSubmit: (values) => {
      registro(values);
      // Realiza alguna lógica con los valores del formulario
      //   console.log("Valores del formulario:", values);
      // Resetea el formulario después de enviarlo
      formik.resetForm();
      inicioSesion();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="bg-slate-800 p-10 mb-4">
        <p className="text-white font-light text-center">
          Por favor, revisa tu correo electrónico
          <br />
          Se envio el codigo que debes introducir en esta seccion
        </p>
        <h1 className="text-white font-bold text-2xl mb-3 text-center">
          Ingresa el codigo de verifiacion
        </h1>
        <input
          type="text"
          placeholder="Ingresa el codigo"
          name="codigo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.codigo}
          className="bg-slate-300 p-3 w-full mb-3"
        />
        {formik.touched.codigo && formik.errors.codigo && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.codigo}
          </div>
        )}
        <button
          type="submit"
          className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
        >
          Verificar
        </button>
      </form>
    </div>
  );
}

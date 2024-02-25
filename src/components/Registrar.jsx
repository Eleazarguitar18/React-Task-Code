import { useState, useContext } from "react";
import { useFormik } from "formik";
import { TaskContext } from "../context/TaskContext";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import { useState, useContext, useEffect } from "react";

function Registrar() {
  const navigate = useNavigate();
  const inicioSecion = () => {
    navigate("/EleazarReact/InicioSesion");
  };
  const HomePage = () => {
    navigate("/EleazarReact");
  };
  const CodigoVerificacion = () => {
    navigate("/EleazarReact/registroCodigo");
  };
  const { onSubmit } = useContext(TaskContext);
  const validationSchema = Yup.object({
    // Define las reglas de validación para tus campos
    nombres: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("Formato de correo electrónico no válido")
      .required("El correo electrónico es obligatorio"),
    apellidos: Yup.string().required("El apellido es obligatorio"),
    genero: Yup.string().required("Seleciona tu genero"),
    fecha_nacimiento: Yup.date()
      .nullable()
      .required("La fecha de nacimiento es obligatoria"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("El campo de contraseña es obligatorio"),
    nombre_usuario: Yup.string().required(
      "El campo de nombre de usuario es obligatorio"
    ),
  });
  const formik = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      email: "",
      genero: "",
      fecha_nacimiento: "",
      password: "",
      nombre_usuario: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      // Realiza alguna lógica con los valores del formulario
      // console.log("Valores del formulario:", values);
      // Resetea el formulario después de enviarlo
      formik.resetForm();
      CodigoVerificacion();
    },
  });
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={formik.handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-white font-bold text-2xl mb-3 text-center">
          Crear cuenta
        </h1>
        {/* <h2>Nombres</h2> */}
        <div className="text-center ">
          <button
            onClick={HomePage}
            className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
          >
            Volver
          </button>

          <button
            onClick={inicioSecion}
            className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
          >
            Iniciar Sesion
          </button>
        </div>

        <input
          name="nombres"
          type="text"
          placeholder="Nombres"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombres}
          className="bg-slate-300 p-3 w-full mb-4"
        />
        {formik.touched.nombres && formik.errors.nombres && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.nombres}
          </div>
        )}
        {/* <h2>Apellidos</h2> */}
        <input
          name="apellidos"
          type="text"
          placeholder="Apellidos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.apellidos}
          className="bg-slate-300 p-3 w-full mb-3"
        />
        {formik.touched.apellidos && formik.errors.apellidos && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.apellidos}
          </div>
        )}
        {/* <h2>Genero</h2> */}
        <select
          id="genero"
          name="genero"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.genero}
          className="bg-slate-300 p-3 w-full mb-2"
        >
          <option value="" label="Selecciona un género" />
          <option value="masculino" label="Masculino" />
          <option value="femenino" label="Femenino" />
        </select>
        {formik.touched.genero && formik.errors.genero && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.genero}
          </div>
        )}

        <h2 className=" text-white">Fecha de nacimiento</h2>
        <input
          name="fecha_nacimiento"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fecha_nacimiento}
          className="bg-slate-300 p-3 w-full mb-3"
        />
        {formik.touched.fecha_nacimiento && formik.errors.fecha_nacimiento && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.fecha_nacimiento}
          </div>
        )}

        {/* <h2>Correo</h2> */}
        <input
          name="email"
          type="email"
          placeholder="Correo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="bg-slate-300 p-3 w-full mb-3"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        )}

        {/* <h2>Contraseña</h2> */}
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="bg-slate-300 p-3 w-full mb-3"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.password}
          </div>
        )}

        {/* <h2>Nombre de usuario</h2> */}
        <input
          name="nombre_usuario"
          type="text"
          placeholder="Nombre de usuario"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre_usuario}
          className="bg-slate-300 p-3 w-full mb-3"
        />
        {formik.touched.nombre_usuario && formik.errors.nombre_usuario && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.nombre_usuario}
          </div>
        )}

        <button
          type="submit"
          className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Registrar;
/* 
nombre,
apellido,
email,
genero,
fecha_nac,
contrasenia,
nombre_usuario,
 */

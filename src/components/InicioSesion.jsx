import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useFormik } from "formik";
import { TaskContext } from "../context/TaskContext";
import * as Yup from "yup";
export default function InicioSesio() {
  const navigate = useNavigate();

  const HomePage = () => {
    navigate("/EleazarReact");
  };
  const Registrar = () => {
    navigate("/EleazarReact/registro");
  };

  const TaskGeneral = () => {
    navigate("/EleazarReact/task");
  };
  const { auth } = useContext(TaskContext);
  const validationSchema = Yup.object({
    // Define las reglas de validación para tus campos
    email: Yup.string()
      .email("Formato de correo electrónico no válido")
      .required("El correo electrónico es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("El campo de contraseña es obligatorio"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(values);
      auth(values);
      // Realiza alguna lógica con los valores del formulario
      // console.log("Valores del formulario:", values);
      // Resetea el formulario después de enviarlo
      formik.resetForm();
      TaskGeneral();
    },
  });
  return (
    <div className="text-center max-w-md mx-auto">
      <h1 className="text-white font-bold text-2xl mb-3 text-center">
        InicioSesion
      </h1>
      {/* <div className="content-center"> */}
      <button
        onClick={HomePage}
        className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
      >
        Volver
      </button>
      <button
        onClick={Registrar}
        className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
      >
        Registrar
      </button>
      <form onSubmit={formik.handleSubmit}>
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
        <button
          type="submit"
          className="bg-slate-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-slate-600 mx-auto"
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}

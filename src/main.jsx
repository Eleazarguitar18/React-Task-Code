import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";
// ? npm create vite {'para crear proyectos'}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <TaskContextProvider></TaskContextProvider> */}
  </React.StrictMode>
);

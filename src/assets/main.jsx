import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente principal de la app
import "./style.css"; // Asegúrate de que tu archivo de estilos esté en la misma carpeta o ajusta la ruta

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

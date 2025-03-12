import React, { useState } from "react";

function Buscar({ setBusqueda }) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
    setBusqueda(e.target.value); // Elevamos el estado
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={manejarCambio}
        placeholder="Buscar por nombre"
      />
    </div>
  );
}

export default Buscar;

import React from "react";

const Busqueda = ({ busqueda, setBusqueda }) => {
  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="busqueda">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Busqueda;

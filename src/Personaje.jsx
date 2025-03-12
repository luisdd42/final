import React from "react";

const Personaje = ({ personaje, agregarAFavoritos }) => {
  const { name, image, status } = personaje;

  return (
    <div className="personaje">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Estado: {status}</p>
      <button onClick={() => agregarAFavoritos(personaje)}>
        Agregar a Favoritos
      </button>
    </div>
  );
};

export default Personaje;

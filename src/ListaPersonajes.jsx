import React from "react";
import Personaje from "./Personaje";

const ListaPersonajes = ({ personajes, agregarAFavoritos }) => {
  return (
    <div className="lista-personajes">
      {personajes.length > 0 ? (
        personajes.map((personaje) => (
          <Personaje
            key={personaje.id}
            personaje={personaje}
            agregarAFavoritos={agregarAFavoritos}
          />
        ))
      ) : (
        <p>No se encontraron personajes.</p>
      )}
    </div>
  );
};

export default ListaPersonajes;

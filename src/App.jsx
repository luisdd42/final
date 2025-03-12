import React, { useState, useEffect } from "react";
import "./style.css";
import Busqueda from "./components/Busqueda";
import ListaPersonajes from "./components/ListaPersonajes";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Cada vez que cambie "busqueda", se realiza una nueva llamada a la API
    const url = busqueda
      ? `https://rickandmortyapi.com/api/character/?name=${busqueda}`
      : "https://rickandmortyapi.com/api/character/";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results || []))
      .catch((error) => {
        console.error("Error al obtener personajes:", error);
        setPersonajes([]);
      });
  }, [busqueda]);

  const agregarAFavoritos = (personaje) => {
    // Se evita agregar duplicados
    if (!favoritos.some((fav) => fav.id === personaje.id)) {
      setFavoritos([...favoritos, personaje]);
    }
  };

  return (
    <div className="App">
      <h1>Listado de Personajes</h1>
      <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      <ListaPersonajes
        personajes={personajes}
        agregarAFavoritos={agregarAFavoritos}
      />
      <h2>Favoritos</h2>
      <div className="favoritos">
        {favoritos.length > 0 ? (
          favoritos.map((fav) => (
            <div key={fav.id} className="favorito">
              <img src={fav.image} alt={fav.name} />
              <p>{fav.name}</p>
            </div>
          ))
        ) : (
          <p>No tienes favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default App;

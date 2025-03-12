import { useState, useEffect } from "react";
import Buscar from "./componentes/Buscar";
import Lista from "./componentes/Lista";
import "./estilos/estilo.css";

function App() {
  const [elementos, setElementos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  // Función para buscar los elementos en la API
  useEffect(() => {
    const buscarElementos = async () => {
      let url = `https://rickandmortyapi.com/api/character/?name=${busqueda}`;
      if (busqueda === "") {
        url = "https://rickandmortyapi.com/api/character";
      }

      const response = await fetch(url);
      const data = await response.json();
      setElementos(data.results || []); // Si no hay resultados, mostramos un array vacío
    };

    buscarElementos();
  }, [busqueda]);

  // Función para agregar a favoritos
  const agregarAFavoritos = (elemento) => {
    setFavoritos([...favoritos, elemento]);
  };

  return (
    <div className="app">
      <h1>Catálogo Interactivo</h1>
      <Buscar setBusqueda={setBusqueda} />
      <Lista elementos={elementos} agregarAFavoritos={agregarAFavoritos} />
      <h2>Favoritos</h2>
      <ul>
        {favoritos.map((favorito, index) => (
          <li key={index}>{favorito.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import './App.css';
import PokeSearch from './components/PokeSearch';
import "./assets/pokeApi.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeList from './components/PokeList';
import PokeFeatures from './components/PokeFeatures';

function App() {

  const [pokeInput, setPokeInput] = useState("") /* Estado del valor del input */
  const [submittedPokemon, setSubmittedPokemon] = useState({}) /* Estado del objeto de pokemon buscado */
  const [isSubmittedPokeEmpty, setIsSubmittedPokeEmpty] = useState(true) /* Estado del valor true o false para saber si se buscó o no un pokemon */
  const [pokeList, setPokeList] = useState([]) /* Estado del array del listado de los pokemons */
  const [offset, setOffset] = useState(0) /* Estado del valor del offset para la paginacion de los pokemons */

  const [pokemonObject, setPokemonObject] = useState([]) /* Estado del array con los objetos con las características de cada pokemon */

  /* Estados del modal */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  /* Obtención del valor de búsqueda */
  const handleChange = (e) => {
    const { value } = e.target
    setPokeInput(value.toLowerCase())
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pokeInput) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`)
      setSubmittedPokemon(response.data)
      setIsSubmittedPokeEmpty(false)
    } else {
      alert("ingrese un valor")
    }
  }

  useEffect(() => {
    const allPokemon = async () => {
      if (!pokeInput) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=30`)
        setIsSubmittedPokeEmpty(true)
        setPokeList(response.data.results)
      }
    }
    allPokemon()
  }, [offset, pokeInput])

  useEffect(() => {
    if (pokeList.length !== 0) {
      pokeList.forEach(async (pokemon) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemonObject(currentList => [...currentList, response.data].sort(function (a, b) { return a.id - b.id }))
      })
    }
  }, [pokeList])


  return (
    <div className="App">
      <PokeSearch handleChange={handleChange} handleSubmit={handleSubmit} handleShow={handleShow} />
      <PokeList pokemonObject={pokemonObject} offset={offset} setOffset={setOffset} />
      {isSubmittedPokeEmpty === false && <PokeFeatures pokemon={submittedPokemon} isSubmittedPokeEmpty={isSubmittedPokeEmpty} handleClose={handleClose} show={show} />}
    </div >
  );
}

export default App;

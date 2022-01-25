import './App.css';
import PokeSearch from './components/PokeSearch';
import "./assets/pokeApi.css"
import PokeCard from './components/PokeCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeList from './components/PokeList';

function App() {
  const [pokeInput, setPokeInput] = useState("")
  const [submittedPokemon, setSubmittedPokemon] = useState({})
  const [isSubmittedPokeEmpty, setIsSubmittedPokeEmpty] = useState(true)
  const [pokeList, setPokeList] = useState([])
  const [offset, setOffset] = useState(0)

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
      setPokeList([])
      console.log(response.data)
    } else {
      const responseNoInput = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      setIsSubmittedPokeEmpty(true)
      setPokeList(responseNoInput.data.results)
      // alert("ingrese un valor")
    }
  }

  useEffect(() => {
    const nextPage = async () => {
      if (!pokeInput) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        setIsSubmittedPokeEmpty(true)
        setPokeList(response.data.results)
      }
    }
    nextPage()
  }, [offset, pokeInput])


  return (
    <div className="App">
      <PokeSearch handleChange={handleChange} handleSubmit={handleSubmit} />
      {isSubmittedPokeEmpty === false && <PokeCard pokemon={submittedPokemon} isSubmittedPokeEmpty={isSubmittedPokeEmpty} />}
      {isSubmittedPokeEmpty === true && <PokeList pokemonList={pokeList} offset={offset} setOffset={setOffset} />}
    </div>
  );
}

export default App;

import React from 'react';
import { Button } from 'react-bootstrap';

export default function PokeList({ pokemonList, setOffset, offset }) {

    const nextPage = () => {
        setOffset(offset + 20)
    }

    const previousPage = () => {
        if (offset > 0) {
            setOffset(offset - 20)
        }
    }

    return (
        <div>
            <div> {pokemonList.map((pokemon) => (
                <ul key={`pokemon-${pokemon.name}`}>
                    <li>{pokemon.name}</li>
                </ul>
            ))}
            </div>
            <div>
                <Button className='mx-4' onClick={previousPage}>Anterior</Button>
                <Button onClick={nextPage}>Siguiente</Button>
            </div>
        </div>
    )
}
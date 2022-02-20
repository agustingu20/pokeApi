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
        <div className='pokemon-list'>
            <div> {pokemonList.map((pokemon) => (
                <ul key={`pokemon-${pokemon.name}`}>
                    <li>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</li>
                </ul>
            ))}
            </div>
            <div className='mt-3 mb-3'>
                <Button className='mx-4 btn-sm' onClick={previousPage}>Anterior</Button>
                <Button className='btn-sm' onClick={nextPage}>Siguiente</Button>
            </div>
        </div>
    )
}
import React from 'react'
import { Card } from 'react-bootstrap'

export default function PokeCard({ pokemon, isSubmittedPokeEmpty }) {
    console.log("PokeCard ~ pokemon", pokemon)

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                    src={isSubmittedPokeEmpty === false && `${pokemon.sprites["front_default"]}`}
                />
                <Card.Body>
                    <Card.Title>
                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} {/* PONER PRIMERA LETRA EN MAYUSCULA */}
                    </Card.Title>
                    <div>
                        <ul>
                            <li className='d-flex justify-content-between'>Hp: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && pokemon.stats[0]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Attack: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && pokemon.stats[1]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Defense: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && pokemon.stats[2]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Special Attack: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && pokemon.stats[3]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Special Defense: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && pokemon.stats[4]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Speed: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && pokemon.stats[5]["base_stat"]}</span></li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

import React from 'react'
import { Card } from 'react-bootstrap'

export default function PokeCard({ pokemon, isSubmittedPokeEmpty }) {

    return (
        <div className='d-flex justify-content-center mt-5 mb-5'>
            <span className='pokedex-container'>
                <svg className='pokedex-circle'>
                    <circle cx={40} cy={40} r={34} fill='white' />
                    <circle cx={40} cy={40} r={30} fill='#00cdff' />
                    <circle cx={100} cy={20} r={11.5} fill='black' />
                    <circle cx={100} cy={20} r={10} fill='#ff6400' />
                    <circle cx={125} cy={20} r={11.5} fill='black' />
                    <circle cx={125} cy={20} r={10} fill='yellow' />
                    <circle cx={150} cy={20} r={11.5} fill='black' />
                    <circle cx={150} cy={20} r={10} fill='green' />
                </svg>
                <Card className='poke-card'>
                    <Card.Img variant="top" style={{ width: "18rem" }}
                        src={isSubmittedPokeEmpty === false && `${pokemon.sprites.other["official-artwork"]["front_default"]}`}
                    />
                    <Card.Body className='mt-auto mb-auto poke-body'>
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
            </span>
        </div>
    )
}

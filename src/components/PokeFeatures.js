import React from 'react'
import { Modal } from 'react-bootstrap'
import PokeCard from './PokeCard'

export default function PokeFeatures({ handleClose, show, pokemon, isSubmittedPokeEmpty }) {

    return (
        <div>
            <Modal show={show} onHide={handleClose} className="modal-style">
                <Modal.Body>
                    <PokeCard
                        isSubmittedPokeEmpty={isSubmittedPokeEmpty}
                        id={pokemon.id}
                        type={pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1)}
                        name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                        image={`${pokemon.sprites.other["official-artwork"]["front_default"]}`}
                        stats={pokemon.stats}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

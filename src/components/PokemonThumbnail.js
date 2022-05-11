import React from 'react'
import { Card } from 'react-bootstrap'

export default function PokemonThumbnail({ id, name, type, image, pokeball }) {
    return (
        <div>
            <Card className={`mx-2 my-2 ${type}`} style={{ width: '18rem' }}>
                <Card.Title className='small mt-3'>Id: {"#" + id}</Card.Title>
                <div className='img-wrapper'>
                    <Card.Img variant="top" className='pokeball-image' src={pokeball} />
                    <Card.Img variant="top" className='poke-image' src={image} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title className='fs-6'>Type: {type}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

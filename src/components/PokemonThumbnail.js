import React from 'react'
import { Card } from 'react-bootstrap'

export default function PokemonThumbnail({ id, name, type, image }) {
    return (
        <div>
            <Card className={`mx-2 my-2 ${type}`} style={{ width: '18rem' }}>
                <Card.Title className='small mt-3'>Id: {"#" + id}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title className='fs-6'>Type: {type}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

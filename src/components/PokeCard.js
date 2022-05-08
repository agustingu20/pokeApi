import React from 'react'
import { Card } from 'react-bootstrap'

export default function PokeCard({ isSubmittedPokeEmpty, name, image, stats, id, type }) {

    return (
        <div className='d-flex justify-content-center mt-5 mb-5'>
            <Card className={`poke-card ${type}`} style={{ width: "18rem" }} >
                <Card.Img variant="top"
                    src={isSubmittedPokeEmpty === false && image}
                />
                <Card.Body className='mt-auto mb-auto poke-body'>
                    <Card.Title> {name} </Card.Title>
                    <Card.Title className='fs-6'>Id: {"#" + id} </Card.Title>
                    <div>
                        <ul>
                            <li className='d-flex justify-content-between'>Hp: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && stats[0]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Attack: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && stats[1]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Defense: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && stats[2]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Special Attack: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && stats[3]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Special Defense: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && stats[4]["base_stat"]}</span></li>
                            <li className='d-flex justify-content-between'>Speed: <span className='text-end me-4'>{isSubmittedPokeEmpty === false && stats[5]["base_stat"]}</span></li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
}

import React from 'react'
import { Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PokeSearch({ handleSubmit, handleChange, handleShow }) {


    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='pokeSearchForm' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingrese el pokémon</Form.Label>
                    <Form.Control type="text" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleShow}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

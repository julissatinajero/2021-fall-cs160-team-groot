import React,{useState} from 'react';
import '../css/SignUp.css';
import {Container, Button, Form, Card} from 'react-bootstrap';

const CreateRecipePage = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        placeholder="Title" 
                        name="title" 
                    />
                </Form.Group>
                <div className="row">
                    <div className="Author + Date add"></div>
                    <div className="Prep time + diet"></div>
                </div>
                <div className="descriptions"></div>
                <div className="ingredients"></div>
                <div className="instructions"></div>
            </Form>
        </Container>
    )
}
export default CreateRecipePage
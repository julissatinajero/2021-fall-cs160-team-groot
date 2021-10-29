import React, { useState } from 'react';
import '../css/SignUp.css';
import { Container, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';

const CreateRecipePage = () => {
    return (
        <Container>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}>
                <h1>Create a new recipe</h1>
                <Form.Group className="mb-3" controlId="recipeTitle">
                    <Form.Label>Title of Recipe</Form.Label>
                    <Form.Control
                        placeholder="Title"
                        name="recipeTitle"
                    />
                </Form.Group>
                <div className="row">
                    <div className="Author + Date add"></div>
                    <div className="Prep time + diet"></div>
                </div>
                <Form.Group className="mb-3" controlId="recipeDescription">
                    <Form.Label>Brief Description</Form.Label>
                    <Form.Control
                        placeholder="Description"
                        name="recipeDescription"
                    />
                </Form.Group>
                <Row>
                    <div class="col-8">
                        <Form.Group className="mb-3" controlId="instructions">
                            <Form.Label>List the instructions</Form.Label>
                            <Form.Control
                                placeholder="Instruction"
                                name="instructions"
                            /> </Form.Group>
                    </div>
                    <div class="col-3">
                        <Button>+</Button>
                    </div>
                </Row>
                <Row>
                    <div class="col-8">
                        <Form.Group className="mb-3" controlId="ingredients">
                            <Form.Label>List the ingredients</Form.Label>
                            <Form.Control
                                placeholder="Ingredient"
                                name="ingredients"
                            /> </Form.Group>
                    </div>
                    <div class="col-3">
                        <Button>+</Button>
                    </div>
                </Row>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Prep Time</Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">15 min</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">30 min</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">45 min</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">60 min</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="descriptions"></div>
                <div className="ingredients"></div>
                <div className="instructions"></div>
            </Form>
        </Container>
    )
}
export default CreateRecipePage
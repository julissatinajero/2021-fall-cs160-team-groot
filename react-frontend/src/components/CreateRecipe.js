import React, { useState } from 'react';
import '../css/SignUp.css';
import { Container, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';

const CreateRecipePage = () => {
    const [values, setValues] = useState({
        recipeTitle: "",
        recipeDescription: "",
        instructions: "",
        ingredients: ""
    });

    const HandleChange = (event) => {
        //Sets the value for each input field
        //First take the initial values of each field
        //Then assign the value given by users based on the names
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }
    
    const HandleFormSubmit = (event) => {
        event.preventDefault();
        //Validating user input
    };

    return (
        <Container>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}>
                <h1>Create a new recipe</h1>
                <Form.Group className="mb-3" controlId="recipeTitle">
                    <Form.Label>Title of Recipe</Form.Label>
                    <Form.Control
                        placeholder="Title"
                        name="recipeTitle"
                        value={values.recipeTitle}
                        onChange={HandleChange}
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
                        value={values.recipeDescription}
                        onChange={HandleChange}
                    />
                </Form.Group>
                <Row>
                    <div class="col-8">
                        <Form.Group className="mb-3" controlId="instructions">
                            <Form.Label>List the instructions</Form.Label>
                            <Form.Control
                                placeholder="Instruction"
                                name="instructions"
                                value={values.instructions}
                        onChange={HandleChange}
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
                                value={values.ingredients}
                        onChange={HandleChange}
                            /> </Form.Group>
                    </div>
                    <div class="col-3">
                        <Button>+</Button>
                    </div>
                </Row>
                
                <Form.Group>
                <Row>
                <Form.Label>Prep Time</Form.Label>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Hours</Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">0 hr</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">1 hr</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">2 hr</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">3 hr</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">4 hr</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                    <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Minutes</Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">0 min</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">5 min</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">15 min</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">30 min</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">45 min</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                </Form.Group>
                <div className="descriptions"></div>
                <div className="ingredients"></div>
                <div className="instructions"></div>

                <Form.Group>
                <Form.Label>Diet</Form.Label>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Pescatarian"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Vegetarian"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Vegan"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                            ))}
                    </Form.Group>
                    <Button type="submit" onClick={HandleFormSubmit} >Submit</Button>
            </Form>
        </Container>
    )
}
export default CreateRecipePage
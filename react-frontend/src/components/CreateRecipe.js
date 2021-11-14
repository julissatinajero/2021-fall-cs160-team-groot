import React, { useState } from 'react';
import '../css/createRecipe.css';
import {Button, Form, Row, Col, Dropdown } from 'react-bootstrap';

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
        <div className="outer-container-Create">
            <div className="inner-container-Create">
                <Form className="form-style-Create">
                    <h1 className="create-form-title">Create a new recipe</h1>
                    <Row>
                        <div className="Author-Date">Auto-Generate Author + Date Here</div>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="recipeTitle">
                            <Form.Label>Title of Recipe</Form.Label>
                            <Form.Control
                                placeholder="Title"
                                name="recipeTitle"
                                value={values.recipeTitle}
                                onChange={HandleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="recipeDescription">
                            <Form.Label>Brief Description</Form.Label>
                            <Form.Control
                                placeholder="Description"
                                name="recipeDescription"
                                value={values.recipeDescription}
                                onChange={HandleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <div class="col-10">
                            <Form.Group className="mb-3" controlId="instructions">
                                <Form.Label>List the instructions</Form.Label>
                                <Form.Control
                                    placeholder="Instruction"
                                    name="instructions"
                                    value={values.instructions}
                                    onChange={HandleChange}
                                /> </Form.Group>
                        </div>
                        <div class="col-2">
                            <div className="outer-div-one-btn">
                                <div className="outer-div-two-btn">
                                    <Button className="plus-button">+</Button>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div class="col-10">
                            <Form.Group className="mb-3" controlId="ingredients">
                                <Form.Label>List the ingredients</Form.Label>
                                <Form.Control
                                    placeholder="Ingredient"
                                    name="ingredients"
                                    value={values.ingredients}
                                    onChange={HandleChange}
                                /> </Form.Group>
                        </div>
                        <div class="col-2">
                            <div className="outer-div-one-btn">
                                <div className="outer-div-two-btn">
                                    <Button className="plus-button">+</Button>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Prep Time</Form.Label>
                            <div className="dropdown-btn-formatting">
                            <Row>
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
                            </Row></div>
                        </Form.Group>
                    </Row>
                    <Row>
                        <div style={{ paddingBottom: "15px" }}>
                        <Form.Label >Diet</Form.Label>
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
                        </div>
                    </Row>
                    <Button className="create-recipe-submitBtn" type="submit" onClick={HandleFormSubmit}>Submit</Button>
                </Form>
            </div>
        </div>

    )
}
export default CreateRecipePage
import React, { useState } from 'react';
import '../css/createRecipe.css';
import {Button, Form, Row, Col, Dropdown } from 'react-bootstrap';
//import validationCreateRecipe from "./createRecipeValidation"

import RecipeDataService from '../services/recipe.services';

const CreateRecipePage = () => {
    const [values, setValues] = useState({
        // recipeTitle: "",
        // recipeDescription: "",
        // instructions: "",
        // ingredients: ""
        //TO-DO: add prep time and diet/menu
        recipeID: "", // Need to figure out a way to generate this
        name: "", 
        authorID: "",
        ingredients: [],
        directions: "", //aka instructions
        menu: [], // aka Diet
        restrictions: [],
        calorieCount: "",
        prepTime: ""
    });
    const [errors, setErrors] = useState({});

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
        //setErrors(validationCreateRecipe(values));
        //Validating user input
        // setErrors(validation(values));

        // Submit the request to the backend
        RecipeDataService.postRecipe(values).then(
            (response) => {
                console.log(response.data);
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        );
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
                        <Form.Group className="mb-3" controlId="recipeID">
                            <Form.Label>Recipe ID</Form.Label>
                            <Form.Control
                                placeholder="Type in a number"
                                name="recipeID"
                                value={values.recipeID}
                                onChange={HandleChange}
                            />
                            {/* {errors.recipeTitle && <p className="error">{errors.recipeTitle}</p>} */}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="authorID">
                            <Form.Label>Author ID</Form.Label>
                            <Form.Control
                                placeholder="Type in a number"
                                name="authorID"
                                value={values.authorID}
                                onChange={HandleChange}
                            />
                            {/* {errors.recipeTitle && <p className="error">{errors.recipeTitle}</p>} */}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Title of Recipe</Form.Label>
                            <Form.Control
                                placeholder="Title"
                                name="name"
                                value={values.name}
                                onChange={HandleChange}
                            />
                            {/* {errors.recipeTitle && <p className="error">{errors.recipeTitle}</p>} */}
                        </Form.Group>
                    </Row>
                    {/* <Row>
                        <Form.Group className="mb-3" controlId="recipeDescription">
                            <Form.Label>Brief Description</Form.Label>
                            <Form.Control
                                placeholder="Description"
                                name="recipeDescription"
                                value={values.recipeDescription}
                                onChange={HandleChange}
                            />
                            {errors.recipeDescription && <p className="error">{errors.recipeDescription}</p>}
                        </Form.Group>
                    </Row> */}
                    <Row>
                        <div class="col-10">
                            <Form.Group className="mb-3" controlId="directions">
                                <Form.Label>List the instructions</Form.Label>
                                <Form.Control
                                    placeholder="Instruction"
                                    name="directions"
                                    value={values.directions}
                                    onChange={HandleChange}
                                /> 
                                {/* {errors.instructions && <p className="error">{errors.instructions}</p>} */}
                            </Form.Group>
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
                                /> 
                                {/* {errors.ingredients && <p className="error">{errors.ingredients}</p>} */}
                                </Form.Group>
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
                        <Form.Group className="mb-3" controlId="prepTime">
                            <Form.Label>Prep Time In Minutes</Form.Label>
                            <Form.Control
                                placeholder="Minutes"
                                name="prepTime"
                                value={values.prepTime}
                                onChange={HandleChange}
                            />
                            {/* {errors.recipeTitle && <p className="error">{errors.recipeTitle}</p>} */}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="calorieCount">
                            <Form.Label>Calorie Count</Form.Label>
                            <Form.Control
                                placeholder="Calories"
                                name="calorieCount"
                                value={values.calorieCount}
                                onChange={HandleChange}
                            />
                            {/* {errors.recipeTitle && <p className="error">{errors.recipeTitle}</p>} */}
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
                    <Row>
                        <div style={{ paddingBottom: "15px" }}>
                        <Form.Label >Restrictions</Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Gluten-free"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Fat-free"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Peanut-free"
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
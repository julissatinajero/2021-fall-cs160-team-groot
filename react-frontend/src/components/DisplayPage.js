import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserCircle, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/DisplayPage.css';
import { Link } from 'react-router-dom';

const recipeTest = {
    recipeId: 1,
    recipeName: "Fresh Salad",
    ingredients: [
        'lettuce',
        'tomato',
        'spinach',
        'sprouts',
        'garlic',
        'salt',
        'pepper'
    ],
    directions: [
        "Place all vegetables in a bowl",
        "Mix for 1 minute",
        "Add garlic dressing",
        "Add salt and pepper to taste"
    ],
    menu: [
        'vegetarian',
        'vegan'
    ],
    restrictions: [
        'soy-free',
        'gluten-free',
        'nut-free',
        'egg-free',
        'shellfish-free'
    ],
    calorie_count: 200,
    prep_time: 10
}

const DisplayPage = () => {
    return (
        <div className="background">
            <Card className="displayCard" style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title class="text-center">
                        <h1 class="ff-font">
                            <b>
                                {recipeTest.recipeName}
                            </b>
                        </h1>

                        <text className="profileFont">
                            Author: &ensp;
                        <FontAwesomeIcon icon={faUserCircle} />
                        &ensp;Jane Doe </text>
                    </Card.Title>
                    <hr style={{ height: '1px' }}></hr>

                    <Container>
                        <Row>
                            <Col xs={3}>
                                <Card>
                                    <Card.Text>
                                        <Card.Title className="titleFont">
                                            <b>Nutrition Info</b>
                                        </Card.Title>

                                        {recipeTest.restrictions.map(item => {
                                            return (
                                                <pre>
                                                    <text className="regularFont"> &nbsp;
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    &nbsp; {item}</text>
                                                </pre>
                                            )
                                        })}

                                        {recipeTest.menu.map(item => {
                                            return (
                                                <pre>
                                                    <text className="regularFont"> &nbsp;
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    &nbsp; {item}</text>
                                                </pre>
                                            )
                                        })}

                                        <hr></hr>

                                        <Card.Title className="titleFont">
                                            <b>
                                                Ingredients
                                            </b>
                                        </Card.Title>
                                        <ul className="regularFont">
                                            {recipeTest.ingredients.map(item => {
                                                return (
                                                    <li>
                                                        {item}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <hr></hr>
                                        <Card.Title className="titleFont">
                                            <b>Notes</b>
                                        </Card.Title>
                                        <pre>
                                            <text class="notesFieldsFont">&ensp; Cook time:</text>
                                            <text className="regularFont">&nbsp; {recipeTest.prep_time}</text>
                                        </pre>
                                        <pre>
                                            <text class="notesFieldsFont">&ensp; Calories:</text>
                                            <text className="regularFont">&nbsp; {recipeTest.calorie_count} calories</text>
                                        </pre>
                                    </Card.Text>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <br></br>
                                    <Card.Title className="titleFont">
                                        <h3><b>Directions</b></h3>
                                    </Card.Title>
                                    <hr></hr>
                                    <Card.Text>
                                        {recipeTest.directions.map((item, index) => {
                                            return (
                                                <pre>
                                                    <text className="instructionsFont">
                                                        <b> &nbsp; {index + 1}. </b>
                                                    </text>
                                                    <text className="instructionsFont">
                                                        &nbsp; {item}
                                                    </text>
                                                </pre>

                                            )
                                        })}

                                    </Card.Text>

                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <Card>
                                    <text className="regularFont text-center"> &nbsp;
                                    <FontAwesomeIcon icon={faHeart} />
                                    &nbsp;
                                    <Link to></Link>
                                     Favorite</text>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <Card>
                                    <text className="regularFont text-center"> &nbsp;
                                    <FontAwesomeIcon icon={faShare} />
                                    &nbsp;
                                    <Link to></Link>
                                     Share</text>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DisplayPage

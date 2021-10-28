import React, { Component } from "react";
import { Form, Card } from 'react-bootstrap'
import '../css/signIn.css';

export default class SignIn extends Component {

    render() {
        return (
            <div className="outer-container-signIn">
                <Card style={{ width: "45%"}}>
                    <Card.Body>
                        <Card.Title><h1 class="text-center ff-font">Sign In</h1></Card.Title>
                        <Form className="formStyling-signIn">
                            <Form.Group controlId="signin-username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group controlId="signin-password" style={{ paddingTop: '20px' }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>
                            <div className="signIn-button-formatting">
                                <button className="signIn-button-styling" type="submit">Sign In</button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
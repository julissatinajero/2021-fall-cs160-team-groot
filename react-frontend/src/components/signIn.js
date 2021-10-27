import React, { Component } from "react";
import { Form, Card } from 'react-bootstrap'
import '../css/signIn.css';

export default class SignIn extends Component {

    render() {
        return (
            <div className="center">
                <Card style={{ width: '35rem' }}>
                    <div className="padding">
                        <h1 className="title-signIn ff-font center">Sign In</h1>
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" style={{ paddingTop: '20px' }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>
                            <div className="center">
                                <button className="signInButton" type="submit">Sign In</button>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div>
        )
    }
}
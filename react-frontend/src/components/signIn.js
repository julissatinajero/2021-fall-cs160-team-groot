import React,{useState} from 'react';
import { Form, Card, Button } from 'react-bootstrap'
import '../css/signIn.css';
import validationSignIn from "./signInValidation"

const SignIn = () => {
    
    // Initial value assignment
    const [values, setValues] = useState({
        signinUsername: "",
        signinPassword: ""
    });

    const [errors, setErrors] = useState({});

    const HandleChange = (event) => {
        // Sets the value for each input field
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const HandleFormSubmit = (event) => {
        event.preventDefault();
        // Validate user input
        setErrors(validationSignIn(values));
    };

    return (
        <div className="outer-container-signIn">
            <Card style={{ width: "45%" }}>
                <Card.Body>
                    <Card.Title><h1 class="text-center ff-font">Sign In</h1></Card.Title>
                    <Form className="formStyling-signIn">
                        <Form.Group controlId="signinUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                name = "signinUsername"
                                placeholder="Enter username"
                                value={values.signinUsername}
                                onChange={HandleChange} 
                            />
                            {errors.signinUsername && <p className="error">{errors.signinUsername}</p>}
                        </Form.Group>

                        <Form.Group controlId="signinPassword" style={{ paddingTop: '20px' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name = "signinPassword"
                                placeholder="Enter password" 
                                value={values.signinPassword}
                                onChange={HandleChange}
                            />
                            {errors.signinPassword && <p className="error">{errors.signinPassword}</p>}
                        </Form.Group>
                        <div className="signIn-button-formatting">
                            <Button className="signIn-button-styling" variant="success" type="submit" onClick={HandleFormSubmit}>Sign In </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
export default SignIn
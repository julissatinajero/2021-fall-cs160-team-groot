import React from 'react'

const SignUpValidation = (values) => {
    let errors = {};

    if (!values.firstName) {
        errors.firstName="First name is required"
    }

    if (!values.lastName) {
        errors.lastName="Last name is required"
    }

    if (!values.username) {
        errors.username="Username is required"
    }

    if (!values.email) {
        errors.email="Email is required"
    }

    if (!values.password) {
        errors.password="Password is required"
    }


    return errors;
}

export default SignUpValidation
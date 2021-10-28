import React from 'react'

const SignInValidation = (values) => {
    let errors = {};

    if (!values.signinUsername) {
        errors.signinUsername="Username is required"
    }

    if (!values.signinPassword) {
        errors.signinPassword="Password is required"
    }
    return errors;
}

export default SignInValidation
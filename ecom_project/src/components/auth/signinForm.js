import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                sign inn
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SigInForm'
})(SignInForm);

export default SignInForm;
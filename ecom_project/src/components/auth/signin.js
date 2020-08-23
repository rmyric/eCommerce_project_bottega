import React, { Component } from 'react';

import { reduxForm, Fieldnpm } from 'redux-form';

class SignIn extends Component {
    render() {
        return (
            <div className='sign-in'>
                sign inn
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'SigIn'
})(SignIn);

export default SignIn;
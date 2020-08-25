import React, { Component } from 'react';

import SignInForm from './signinForm';

class SignIn extends Component {

    onSubmit = () => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-in'>
                <SignInForm onSubmit={this.onsubmit} className='sign-in__form'/>
            </div>
        )
    }
}


export default SignIn;
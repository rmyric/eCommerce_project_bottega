import React, { Component } from 'react';

import SignUpForm from './signupForm';
import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-up'>
                <PageTitle className='sign-up__page-title' title='Register'/>
                <SignInForm onSubmit={this.onsubmit} className='sign-up__form'/>
            </div>
        )
    }
}


export default SignUp;
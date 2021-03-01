import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
      email: '',
      password: ''
  })

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);   
    }

    const handleChange = event=> {
        const { value, name } = event.target;
        setCredentials( {...userCredentials, [name]: value })
    }



        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email password</span>
                <form onSubmit={handleSubmit}> 
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        value={email} 
                        required 
                        handleChange={handleChange}    
                        />
    
                    <FormInput 
                        name = 'password' 
                        type = 'password' 
                        label = 'password'
                        value={password} 
                        required
                        handleChange={handleChange}
                        />
               
                    <div className='buttons'>
                    <CustomButton type='submit'>
                    SIGN IN
                    </CustomButton>

                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignin>
                    SIGN IN WITH GOOGLE
                    </CustomButton>
               
                    </div>
                     </form>
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
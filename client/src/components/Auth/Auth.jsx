import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import './auth.css'


const initialState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export function Auth() {


    const [ form, setForm ] = useState(initialState);
    const [ isSignUp, setIsSignUp ] = useState(false);

    function switchMode(){
        setIsSignUp((prevValue) => !prevValue )
    }

    function handleChange(e){
        e.preventDefault();
        setForm({ ... form, [e.target.name]: e.target.value});

    }

    function handleSubmit(e){
        e.preventDefault();
        
    }



    return (
        <div className='auth-form-cont'>
            <div className='auth-form-wrapper'>
                <div className="auth-form-cont-fields">
                    <div className="auth-form-cont-fields-content">
                        <p className='register-text'>{ isSignUp ? 'Register' : 'Log in'}</p>
                        <form action="" onSubmit={handleSubmit}>
                            { isSignUp && (
                                <div className="auth-form-cont-fields-cont-input">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input 
                                        type="text"
                                        name='fullName'
                                        placeholder='Full name'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="auth-form-cont-fields-cont-input">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text"
                                    name='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="auth-form-cont-fields-cont-input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            { isSignUp && (
                                <div className="auth-form-cont-fields-cont-input">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input 
                                        type="password"
                                        name='confirmPassword'
                                        placeholder='Confirm Password'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="auth-form-cont-btn">
                                <button>{ isSignUp ? 'Register' : 'Log in'}</button>
                            </div>
                        </form>
                        <div className="auth-form-cont-account">
                            <p>
                                { isSignUp ? 'Already have an account?' : 'Join us!' }
                                <span className='span-sign-text' onClick={switchMode}>
                                    { isSignUp ? ' Log in' : ' Register' }
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}



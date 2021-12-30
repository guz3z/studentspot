import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import './auth.css'

export function Auth() {

    const [ isSignUp, setIsSignUp ] = useState(true);

    function switchMode(){
        setIsSignUp((prevValue) => !prevValue )
    }

    function handleChange(){}



    return (
        <div className='auth-form-cont'>
            <div className='auth-form-wrapper'>
                <div className="auth-form-cont-fields">
                    <div className="auth-form-cont-fields-content">
                        <p className='register-text'>{ isSignUp ? 'Register' : 'Log in'}</p>
                        <form action="" onSubmit={() => {}}>
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



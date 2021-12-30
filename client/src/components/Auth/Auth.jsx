import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import './auth.css'


const cookies = new Cookies();

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

    async function handleSubmit(e){
        e.preventDefault();

        const { fullName, email, password } = form;
        const URL = 'http://localhost:5000/auth';

        const { data: { token, userId, hashedPassword } } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
            email, password, fullName
        });

        cookies.set('token', token);
        cookies.set('email', email);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignUp) {
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
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



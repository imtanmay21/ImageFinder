import React from 'react'
import classes from './Login.module.css';
import Card from '../UI/Card';
import FormButton from '../UI/FormButton';
import Link from '../UI/Link';
import { useRef, useState } from 'react';
import { useAuth } from '../../config/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setIsLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch(err) {
            switch(err.code) {
                case 'auth/invalid-email':
                    setError('Invalid Email')
                    break
                case 'auth/user-not-found':
                    setError('Email does not exist')
                    break
                case 'auth/wrong-password':
                    setError('Wrong Password')
                    break
                default: setError('Failed to log in')
                break
            }
        }

        setIsLoading(false);
    }

    return (
        <div className={classes.container}>
            <Card className={classes['login-card']}>
                <form onSubmit={handleSubmit} className={classes.login}>
                    <h1>Log In</h1>
                    {error && <label className={classes.error}>{error}</label>}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" ref={emailRef} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={passwordRef} />
                    </div>
                    <FormButton disabled={isLoading}>Login</FormButton>
                    <p>Don't have an account ? <Link to="/signup">Sign Up</Link> </p>
                </form>
            </Card>
        </div>
    )
}


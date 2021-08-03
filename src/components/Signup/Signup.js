import React, { useRef, useState } from 'react'
import Card from '../UI/Card';
import FormButton from '../UI/FormButton';
import Link from '../UI/Link';
import { useAuth } from '../../config/AuthContext';
import classes from './Signup.module.css';
import { useHistory } from 'react-router-dom';

export default function Signup() {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('')
            setIsLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch(err) {
            switch(err.code) {
                case 'auth/invalid-email':
                    setError('Invalid Email')
                    break
                case 'auth/weak-password':
                    setError('Password should contain at least 6 characters')
                    break
                case 'auth/email-already-in-use':
                    setError('Email already exists')
                    break
                default:
                    setError('Failed to create account')
                    break
            }
        }

        setIsLoading(false);
    }

    return (
        <div className={classes.container}>
            <Card className={classes['signup-card']}>
                <form onSubmit={handleSubmit} className={classes.signup}>
                    <h1>SignUp</h1>
                    {error && <label className={classes.error}>{error}</label>}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" ref={emailRef} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={passwordRef} />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" ref={confirmPasswordRef} />
                    </div>
                    <FormButton disabled={isLoading}>SignUp</FormButton>
                    <p>Already have an account ? <Link to="/login">Log In</Link> </p>
                </form>
            </Card>
        </div>
    )
}

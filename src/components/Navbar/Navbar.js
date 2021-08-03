import React from 'react';
import { useHistory } from 'react-router';

import Button from '../UI/Button';
import { useAuth } from '../../config/AuthContext';

import classes from './Navbar.module.css';

export default function Navbar() {

    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        try {
            await logout();
            history.push("/login");
        } catch {
            console.log('Something went wrong');
        }
    }

    return (
        <div className={classes['nav-container']}>
            <nav className={classes.navbar}>
                <h4>ReactSplash</h4>
                <div className={classes['nav-links']}>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </nav>
        </div>
    )
}

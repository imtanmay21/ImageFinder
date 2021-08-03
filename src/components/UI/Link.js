import React from 'react'
import { useHistory } from 'react-router-dom';
import classes from './Link.module.css';

export default function Link(props) {

    const history = useHistory();

    function handleClick() {
        history.push(props.to)
    }

    return (
        <button onClick={handleClick} className={classes.link}>{props.children}</button>
    )
}
import React from 'react'
import classes from './FormButton.module.css';

export default function FormButton(props) {
    return (
        <button type="submit" className={classes.button} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

import React from 'react';
import {ButtonR} from './styles.js';

const Button = ({onClick, children}, props) => {
    return (
        <>
        <ButtonR onClick={onClick}>
            {children}
        </ButtonR>
        variant: {props.variant}
        </>
    )
}

export default Button;
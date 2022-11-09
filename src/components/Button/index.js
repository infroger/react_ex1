import React from 'react';
import {Container} from './styles.js';

const Button = ({onClick, children, variant}) => {
    return (
        <>
        <Container 
            onClick={onClick}
            variant={variant}>
            {children}            
        </Container>
        </>
    )
}

export default Button;
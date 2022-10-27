import React from 'react';
import './menu.css';
import {Nav, LinkNav} from './styles.js';

const Menu = () => {
    return (
        <>
            <Nav>
                <h1>Custo de React JS</h1>
                <LinkNav active={true} href="#">Departamentos</LinkNav>
                <LinkNav active={false} href="#">Add Departamento</LinkNav>
            </Nav>
        </>
    )
}

export default Menu;
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';


export const Nav = styled.nav`
    background: ${ ({theme}) => theme.colors.background };
    color: ${ ({theme}) => theme.colors.mainColor };

    display: flex;  /* udo lado a lado */
    align-items: stretch; 
    padding: 10px;

    h1 {
        margin-right: 60px;
    }

`;

/* LinkNav herda os atributos de a, por exemplo href*/
export const LinkNav = styled(Link)`

    color: ${ ({theme}) => theme.colors.mainColor };
    font-size: 20px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-right: 1px dashed white;

    /* background: ${props => props.active ? 'black' : 'transparent'}; */
    ${props => 
        props.active && 
            css`
                background: black;
                color: #e89900;
            
    `}

    &:hover {
        text-decoration: underline;
    }

`


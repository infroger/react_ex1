import styled, {css} from 'styled-components';

export const Nav = styled.nav`
    background: #002244;
    color: white;

    display: flex;  /* udo lado a lado */
    align-items: stretch; 
    padding: 10px;

    h1 {
        margin-right: 60px;
    }

`;

/* LinkNav herda os atributos de a, por exemplo href*/
export const LinkNav = styled.a`

    /* background: ${props => props.active ? 'black' : 'transparent'}; */
    color: white;
    font-size: 20px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-right: 1px dashed white;

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


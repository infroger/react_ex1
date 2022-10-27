import styled, {css} from 'styled-components';

/* Button herda os atributos de button*/
export const ButtonR = styled.button`

${props => 
    props.variant &&
        css`
            background: #198754;
            color: white;
        `}

`
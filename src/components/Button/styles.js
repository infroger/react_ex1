import styled, {css} from 'styled-components';



/* Button herda os atributos de button*/
export const Container = styled.button`

padding: 10px;
border-radius: 4px;
background: #e1e1e1;

${props => 
    props.variant == "success" &&
        css`
            background: #198754;
            color: white;
        `
    }

${props => 
    props.variant == "warning" &&
        css`
            background: #ffc107;
            color: white;
        `
    }

${props => 
    props.variant == "danger" &&
        css`
            background: #dc3545;
            color: white;
        `
    }
`
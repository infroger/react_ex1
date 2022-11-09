import styled from 'styled-components';

export const Container = styled.div`

    input {
        width: 400px;
        padding: 10px;
        border-radius: 4px;
        border-color: ${({ theme }) => theme.colors.background };
        display: block; /*Elementos do tipo display-block não costumam ficar um ao lado do outro */
        margin: 10px;
    }


`

export const Mensagem = styled.p`

    color: red;
    font-weight: bold;

`

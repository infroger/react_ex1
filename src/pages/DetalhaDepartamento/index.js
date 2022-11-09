import React from "react";
import { useParams } from "react-router-dom";

const DetalhaDepartamento = () => {

    const {idDepartamento} = useParams();

    return (
        <>
            <h1>Detalhe Departamento</h1>

            <ul>
                <li>ID: {idDepartamento}</li>
            </ul>
        </>
    )


}

export default DetalhaDepartamento;
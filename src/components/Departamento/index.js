import React from 'react';

const Departamento = (dep) => {
    return (
        <a href="#" key={dep.id_departamento}>{dep.nome}</a>
    )
}

export default Departamento;
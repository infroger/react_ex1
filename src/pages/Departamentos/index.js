import React,  { useState, useEffect }  from 'react';
import Departamento from '../../components/Departamento/index.js';
import Row from "./styles";
import { Link } from 'react-router-dom';
import getDepartamentos from '../../services/departamentos';





const Departamentos = () => {


    const [departamentos, setDepartamentos] = useState([]);
    const [msg, setMsg] = useState();

    //console.log(getDepartamentos());

    const loadDepartamentos = async() => {
        try {
            const resp = await getDepartamentos();
            console.log(resp);
            setDepartamentos(resp.data);
            setMsg('');
        } catch(e) {
            console.error('Exception: ', e.response.status)
            setMsg(`Server error - code: ${e.response.status}`);
        }
    }

    useEffect(() => {
        if (departamentos.length == 0) {
            console.log("Atualizando departamentos...")
            loadDepartamentos();
        }
    },[departamentos])


    /*
    const departamentos = [
        { id_departamento: 1, nome: 'Recursos Humanos', sigla: 'RH' },
        { id_departamento: 2, nome: 'Financeiro',       sigla: 'FINANC' },
        { id_departamento: 3, nome: 'Contabilidade',    sigla: 'CONTAB' }
      ]
    */

      
      
    return (
        <>
            <h1>Departamentos</h1>

            {/*
            { departamentos.map((dep) => Departamento(Object.values(dep)) )}
            */}

            <h3>{msg}</h3>
            { departamentos && departamentos.map(d => {
                return (
                     <Row key={d.id_departamento}>
                       <Link to={`/departamentos/${d.id_departamento}`}>{d.nome}</Link>
                    </Row>
            )})}
        </>
    )
}

export default Departamentos;
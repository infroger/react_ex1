import MockAdapter from 'axios-mock-adapter';
import departamentosMock from '../mocks/departamentosMock.json';

const configureMock = (axios) => {

//const mock = new MockAdapter(axios);

//Adiciona um delay de 1s em todos os responses
const mock = new MockAdapter(axios, {delayResponse: 1000});


/*
mock.onGet('/departamentos/').reply(200, [
    {id_departamento: 1, nome: 'AAA', sigla: 'A'}
]);
*/


// Buscando de um arquivo JSON
// O seletor pode ser expressão regular
mock.onGet('/departamentos/').reply(200,departamentosMock);
//mock.onGet('/departamentos/').reply(500,departamentosMock);



}

export default configureMock;
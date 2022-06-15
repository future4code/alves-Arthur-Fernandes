import React from 'react';



export default class Etapa3 extends React.Component{

    render(){
        return (
            <>
             <h1>Etapa 3: Complementar </h1>
             <p>1. Por que não terminou o curso de graduação?</p>
             <input/>
             <p>2. Você fez algum curso complementar?</p>
             <select>
                    <option >Curso Técnico</option>
                    <option >Curso de Inglês</option>
                    <option >Não fiz curso complementar</option>
            </select>
            </>
        );
    }
}
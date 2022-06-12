import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const ContainerPequeno = styled.section `
    display: flex;
    gap:5px;
    justify-items: flex-start;
`
const Imagem = styled.img `
width: 20px;
    margin-right: 10px;
    border-radius: 50%;
`
const Titulo = styled.h4 `
margin-bottom: 15px;
`

function CardPequeno(props) {
    return (
        <Container>
            <Imagem img src={ props.imagem } />
            <ContainerPequeno>
                <Titulo> { props.titulo }</Titulo>
                <p>{ props.descricao }</p>
            </ContainerPequeno>
        </Container>
    )
}

export default CardPequeno;
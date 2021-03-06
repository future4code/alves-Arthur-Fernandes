import React from 'react';
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ContainerPequeno = styled.section `
    display: flex;
    flex-direction: column;
    gap:5px;
    justify-items: flex-start;
`
const Imagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Titulo = styled.h4 `
margin-bottom: 15px;
`



function CardGrande(props) {
    return (
        <Container>
            <Imagem img src={ props.imagem } alt =""/>
            <ContainerPequeno>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </ContainerPequeno>
        </Container>
    )
}

export default CardGrande;
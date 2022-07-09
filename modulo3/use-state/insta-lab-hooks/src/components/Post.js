
import { useState } from "react";
import styled from "styled-components";

const Main = styled.div `
display: flex;
flex-direction: column;
align-items: center;
border: solid 1px purple;
min-width: 20vw;
`
const User = styled.figure `
display: flex;
flex-direction: column;
align-items: center;
border: solid 1px purple;
`
const BoddyPost = styled.main`
display: flex;
flex-direction: column;
align-items: center;
border: solid 1px purple;
text-align: center;
width: 80%;
border-radius: 5px;
`
const Box = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
max-width: 100%;
` 
const Footer= styled.footer`
  width:20vw;
  display:flex;
  justify-content: space-evenly;
`
const BoxComment = styled.div`
  border: solid 1px purple;
  width: inherit;
  max-width: 100%;
  min-width: 80%;
  margin-bottom: 2vh;
  overflow: hidden;
  text-overflow:ellipsis;
`
function Post(props) {
  // Passo5
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentado, setComentado] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };
  const onClickComentario = () => {
   setComentado(!comentado)
  };
  const onChangeComentario = (event) => {
    setInputValue(event.target.value)
  };
  const enviarComentario = (comentario) => {
    setComentarios([...comentarios, comentario])
    setComentado(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputValue('')
  };
  const caixaDeComentario = comentado ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      <button onClick={()=> enviarComentario(inputValue)}>Enviar</button>
    </>
  ) : (
    <>
      {comentarios.map((comentario, index) => {
        return <div key={index}>
            <p>{comentario}</p>
          </div>
      })}
    </>
  );
  return (
    <Main>
      <header>
        <User>
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </User>
      </header>
      <hr />
      <BoddyPost>
        <figure>
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </BoddyPost>
      <hr />
      <Footer>
        <Box>
          <span>Comentários:{numeroComentarios}</span>
          <button onClick={onClickComentario}>
            {comentado ? "Fechar" : "Comentar"}
          </button>
          <h4>Comentários :</h4>
          <BoxComment>{caixaDeComentario}</BoxComment>
        </Box>
        <Box>
          <span>Curtidas:{numeroCurtidas}</span>
          <button onClick={onClickCurtida}>
            {curtido ? "Dislike" : "Like"}
          </button >
        </Box>
      </Footer>
    </Main>
  );
};

export default Post;
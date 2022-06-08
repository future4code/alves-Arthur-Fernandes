import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'paulino'}
          fotoUsuario={'https://picsum.photos/50/59'}
          fotoPost={'https://picsum.photos/200/156'}
        />
         <Post
          nomeUsuario={'paulineli'}
          fotoUsuario={'https://picsum.photos/50/58'}
          fotoPost={'https://picsum.photos/200/157'}
        />
      </MainContainer>
    );
  }
}

export default App;

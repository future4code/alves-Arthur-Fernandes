import Post from './components/Post';
import styled from 'styled-components';

const Center = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
function App() {
  return (
    <Center>
      <h1>Post</h1>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </Center>
  );
};

export default App;

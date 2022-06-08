import React from 'react';
import styled from 'styled-components'
import Post1 from './components/Post/Post1';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';

const PostsContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
`

const MainContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (

      <PostsContainer>
        <MainContainer>
          <Post1
            nomeUsuario={'Paula'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>,

        <MainContainer>
          <Post2
            nomeUsuario={'Isabela'}
            fotoUsuario={'https://picsum.photos/seed/picsum/50/50'}
            fotoPost={'https://picsum.photos/id/1011/200/150'}
          />
        </MainContainer>,

        <MainContainer>
          <Post3
            nomeUsuario={'Giovanna'}
            fotoUsuario={'https://picsum.photos/id/1005/50/50'}
            fotoPost={'https://picsum.photos/id/1012/200/150'}
          />
        </MainContainer>
      </PostsContainer>

    );
  }
}

export default App;

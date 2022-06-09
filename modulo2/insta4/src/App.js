import React from 'react';
import styled from 'styled-components'
import Post1 from './components/Post/Post1';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';
import { Formulario } from './components/Formulario/Form';


const PostsContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const MainContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
  display:flex;
  justify-content:center;
`


const arrayPosts = [
  <PostsContainer>
    {
      <MainContainer>
        <Post1
          nomeUsuario={'Paula'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    },

    {
      <MainContainer>
        <Post2
          nomeUsuario={'Isabela'}
          fotoUsuario={'https://picsum.photos/seed/picsum/50/50'}
          fotoPost={'https://picsum.photos/id/1011/200/150'}
        />
      </MainContainer>
    },

    {
      <MainContainer>
        <Post3
          nomeUsuario={'Giovanna'}
          fotoUsuario={'https://picsum.photos/id/1005/50/50'}
          fotoPost={'https://picsum.photos/id/1012/200/150'}
        />
      </MainContainer>
    }
  </PostsContainer>
]

class App extends React.Component {

  state = {
    posts: arrayPosts,

    novoPost: {
      valorInputNome: "",
      valorInputTwite: "",
      valorInputData: "",
    }
  }

  createPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      twite: this.state.valorInputTwite,
      data: this.state.valorInputData
    }

    const novoArrayPosts = [...this.state.posts, novoPost]
    this.setState({ posts: novoArrayPosts })
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputTwite = (event) => {
    this.setState({ valorInputTwite: event.target.value })
  }

  onChangeInputData = (event) => {
    this.setState({ valorInputData: event.target.value })
  }


  render() {

    // const elementosDoPost = this.state.novoPost.map((input, indice) => {



    //   return (
    //     <p>
    //       {input}
    //     </p>
    //   )

    // })

    return (
      <div>

        <FormContainer>
          <Formulario>
            <input value={this.state.valorInputNome} onChange={this.onChangeInputNome} />
            <input value={this.state.valorInputTwite} onChange={this.onChangeInputTwite} />
            <input value={this.state.valorInputData} onChange={this.onChangeInputData} />
          </Formulario>
        </FormContainer>
        {/* {elementosDoPost} */}
        {this.state.posts}

      </div>


    );
  }
}

export default App;

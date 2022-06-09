import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
// Não sei porque algumas importação se coloca as chaves e outras nao

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {

    if(this.state.numeroCurtidas === 0){
      this.state.curtido = true
      
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas +1
      })

    }else{
      this.state.curtido = false
      
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas -1
      })
    }
  }


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
      // Porque aqui seria state? Nos exemplos passado eu tinha entendi que era pra colocar target.value
      // Se o click no comentario for acionado, o comentário vai ser verdadeiro em vez de falso.
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
      //Aqui eu entendi que ele está pegando o state la de cima e o numero de comentarios, 
      //mas ainda nao entend o exemplo dado em aula
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
// O "aoEnviarComentario é uma função la de cima, que diz que o numero de comentarios soma + 1"
// Não entendi o qual é desse aoEnviar. No arquivoSecaoComentario, apareceu um props de lugar algum
    }

    return <PostContainer>
{/* essas tags em roxo são do styled */}
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
{/* O props está vindo lá da pafina inicial (App.js). O props no caso é um espaço onde colocamos valor, 
como o nome, a foto do usuario e a foto do post */}

        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post
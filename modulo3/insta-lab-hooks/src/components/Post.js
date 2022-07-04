import {useState} from 'react'

function Post(props) {

  const [valueCurtida, setCurtidaState] = useState(0)
  const [valueClickComentario, setClickComentario] = useState(0)
  const [valueInputComentario, setInputComentario] = useState("")
  const [arrayComentarios, setAdicionarComentario] = useState([])


  
  const onClickCurtida = () => {
 
    if (valueCurtida === 0) {
      setCurtidaState (valueCurtida + 1)
    } else {
      setCurtidaState (valueCurtida - 1)
    }
  };


  const onClickComentario = () => {
    if (valueClickComentario === 0) {
      setClickComentario (valueClickComentario + 1)
    } else {
      setClickComentario (valueClickComentario - 1)
    }
  };


  const onChangeComentario = (event) => {
    setInputComentario( event.target.value)

  };


  const enviarComentario = (comentario) => {
    setAdicionarComentario([...arrayComentarios, comentario])
    console.log(arrayComentarios)
   
  };


  const caixaDeComentario = valueClickComentario >= 1 ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>

      <input 
        id={"comentario"}
        value={valueInputComentario}
        onChange={onChangeComentario}
      />

      <button onClick={() => enviarComentario(valueInputComentario)} >Enviar</button>
    </>
  ) : (
    arrayComentarios.map((comentario, index) => {
      return (
        <div key={index}>
          <p>{comentario}</p>
          
        </div>
      )
    })
  

  );

  return (
    <main>
      <header>
        <figure>
          
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
         
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
        
          <span>Número de curtidas: {valueCurtida}</span>
       
          <button onClick={onClickCurtida} >
         
            {valueCurtida === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
        
          <span>Número de comentários: {valueClickComentario}</span>
        
          <button onClick={onClickComentario}> 
            
            {valueClickComentario  ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;

import React, {useState} from 'react'

export const Header = (props) => {
  
  const [valueButton, setValueButton] = useState(0)
  const [actualPage, setChangePage] = useState()

 const changeButton = () => {
  if (valueButton === 0) {
    setValueButton (valueButton + 1)
  } else {
    setValueButton (valueButton - 1)
  }
 }
   
  const changePage = () => {
    if(valueButton === 0) {
      setChangePage(props.goToMatches())
    } else {
      setChangePage(props.goToPerfis())
    }
  }


  return (
    <div>
        <h1>Tinder</h1>

        <button onClick={() => (props.goToMenuLateral())}>Mudar de Menu </button>

        <button onClick={() => changeButton(changePage())} > {valueButton === 0 ? ("Ir para matches") : "Ir para perfis"}
        </button >
        
        <hr />

        
    </div>
  )
}
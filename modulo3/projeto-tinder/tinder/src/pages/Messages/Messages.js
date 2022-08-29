import { useState, React } from 'react';
import * as C from './styled'

//IMPORTAÇÃO PARA INTEGRAÇÃO COM BACK END (SOCKET.IO)

// import io from 'socket.io-client'
// import { v4 as uuidv4 } from 'uuid';
// const myId = uuidv4()
// const socket = io('http://localhost:3000')

// socket.on('connect', () => console.log('[IO] Connect => New Connection'))

export const Messages = () => {

    const [message, setMessage] = useState('')
    const [messages, updateMessages] = useState([])

    const onChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    const sendMessage = () => {
        updateMessages([...messages, message])
        setMessage('')
    }

    //TENTATIVA DE FAZER UMA INTEGRAÇÃO COM BACK END (SOCKET.IO)

    //     const [message, setMessage] = useState('')
    //     const [messages, updateMessages] = useState([])

    //     useEffect(() => {
    //         const handleNewMessage = newMessage =>
    //             updateMessages([...messages, newMessage])
    //         socket.on('chat.message', handleNewMessage)
    //         return () => socket.off('chat.message', handleNewMessage)
    //     }, [messages])

    //     const handleInputChange = event => {
    //         updateMessage(event.target.value)
    //     }

    //     const handleFormSubmit = event => {
    //         event.preventDefault() /* para que o navegador não recarregue a pagina quando mudar o form, pois o comportamento padrão é recarregar a pagina */
    //         if (message.trim()) {
    //             // updateMessages([...messages, {id:1, message}])
    //             socket.emit('chat.message', {
    //                 id: myId,
    //                 message
    //             })
    //             updateMessage("")
    //         }
    //     }

    return (

        <main>

           {messages.map((msg,index) => {
            return <C.Balao key={index}>
                <C.Mensagem>{msg}</C.Mensagem>
                {/* {console.log(msg)} */}
            </C.Balao>

           })}

            <C.BarraEnviar className="form" type='reset'>
                <C.Input
                    className='form__field'
                    onChange={onChangeMessage}
                    placeholder="Type a new message here"
                    type="text"
                    value={message}
                    >
                </C.Input>

                <C.SimboloEnviar><ion-icon name="send-outline" size="large" onClick={sendMessage}></ion-icon></C.SimboloEnviar>
            </C.BarraEnviar>

        </main>

        // <main className='container'>

        //     <ul className='list'>

        //         {messages.map((msg, index) => (
        //             <li
        //                 className={`list__items list_item--${msg.id === myId ? 'mine' : 'other'}`}
        //                 key={index}>  {/* BLOCK__ELEMENT   MODIFIER */}
        //                 <span
        //                     className={`message message--${msg.id === myId ? 'mine' : 'other'}`}>
        //                     {msg.message}
        //                 </span>
        //             </li>
        //         ))}


        /* <li className='list__items list_item--other'>
            <span className='message message--other'>
                Olá
            </span>
        </li> */

        //     </ul>


        // </main>
    )
}
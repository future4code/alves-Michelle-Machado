import { useEffect, useState, React } from 'react';
import io from 'socket.io-client'
import { v4 as uuidv4 } from 'uuid';
import * as C from './styled'

const myId = uuidv4()
const socket = io('http://localhost:3000')

socket.on('connect', () => console.log('[IO] Connect => New Connection'))

export const Messages = () => {

    const [message, updateMessage] = useState('')
    const [messages, updateMessages] = useState([])

    useEffect(() => {
        const handleNewMessage = newMessage =>
            updateMessages([...messages, newMessage])
        socket.on('chat.message', handleNewMessage)
        return () => socket.off('chat.message', handleNewMessage)
    }, [messages])

    const handleInputChange = event => {
        updateMessage(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault() /* para que o navegador não recarregue a pagina quando mudar o form, pois o comportamento padrão é recarregar a pagina */
        if (message.trim()) {
            // updateMessages([...messages, {id:1, message}])
            socket.emit('chat.message', {
                id: myId,
                message
            })
            updateMessage("")
        }
    }

    return (

        <main className='container'>

            <ul className='list'>

                {messages.map((msg, index) => (
                    <li
                        className={`list__items list_item--${msg.id === myId ? 'mine' : 'other'}`}
                        key={index}>  {/* BLOCK__ELEMENT   MODIFIER */}
                        <span
                            className={`message message--${msg.id === myId ? 'mine' : 'other'}`}>
                            {msg.message}
                        </span>
                    </li>
                ))}


                {/* <li className='list__items list_item--other'>
                    <span className='message message--other'>
                        Olá
                    </span>
                </li> */}

            </ul>

            <C.BarraEnviar className="form" onSubmit={handleFormSubmit}>
                <C.Input
                    className='form__field'
                    onChange={handleInputChange}
                    placeholder="Type a new message here"
                    type='text'
                    value={message}>
                </C.Input>

                <C.SimboloEnviar><ion-icon  name="send-outline" size="large"></ion-icon></C.SimboloEnviar>
            </C.BarraEnviar>

        </main>
    )
}
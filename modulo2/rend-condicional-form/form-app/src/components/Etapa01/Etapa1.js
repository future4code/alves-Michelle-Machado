import React from 'react'
import {Perguntas} from './styled'


class Etapa1 extends React.Component {

    render() {
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <ul>
                    <Perguntas>
                        1. Qual é o seu nome?
                        <input type={'text'} placeholder={'Nome'} />
                    </Perguntas>

                    <Perguntas>
                        2.Qual é a sua idade?
                        <input type={'number'} placeholder={'Idade'} />
                    </Perguntas>

                    <Perguntas>
                        3.Qual é o seu email?
                        <input type={'text'} placeholder={'Email'} />
                    </Perguntas>

                    <Perguntas>
                        4.Qual é a sua escolaridade?
                        <input type={Selection} />
                    </Perguntas>

                </ul>

            </div>
        )
    }

}

export default Etapa1
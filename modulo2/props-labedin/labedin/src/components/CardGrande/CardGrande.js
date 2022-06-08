import React from 'react';
// import './CardGrande.css';
import { CardGrandeContainer, CardGrandeDescricao, CardGrandeh4, CardGrandeImagem } from './StyledContainer';


function CardGrande(props) {
    return (
        // <div className="bigcard-container">
        //     <img src={props.imagem} />
        //     <div>
        //         <h4>{props.nome}</h4>
        //         <p>{props.descricao}</p>
        //     </div>
        // </div>

        <CardGrandeContainer className="bigcard-container">
            <CardGrandeImagem src={props.imagem} />
            <div>
                <CardGrandeh4>{props.nome}</CardGrandeh4>  
                <CardGrandeDescricao>{props.descricao}</CardGrandeDescricao>
            </div>
        </CardGrandeContainer>
    )
}

export default CardGrande;
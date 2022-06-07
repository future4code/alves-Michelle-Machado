import React from 'react';
import './CardGrande.css';
// import { CardGrandeContainer } from './StyledContainer';
// import { CardGrandeImagem } from './StyledImagem';
// import { CardGrandeh4 } from './StyledH4';
// import { CardGrandeDescricao } from './StyledDescricao';

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={props.imagem} />
            <div>
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
            </div>
        </div>

        // <CardGrandeContainer>
        //     <CardGrandeImagem />

        //     <CardGrandeh4 />
        //     <CardGrandeDescricao />

        // </CardGrandeContainer>
    )
}

export default CardGrande;
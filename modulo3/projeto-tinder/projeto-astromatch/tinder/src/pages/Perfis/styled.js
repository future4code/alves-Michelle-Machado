import styled from "styled-components"

export const Body = styled.div`
    width: 67vw;
    height: 100vh; 
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #EBEDF0;
`;

export const Container = styled.section`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 450px;
    height: 570px;
    transtion: 5s linear;
    box-shadow: 10px 20px 35px #5b5b5b;

    animation:   ${props => {
        if (props.animation === "direita") {
            return "direita 0.5s  0s"
        } else if (props.animation === "esquerda") {
            return "esquerda 0.5s 0s"
        } else {
            return ""
        }
    }};

    @keyframes direita {
    from{
    transform: translate(0) rotate(0);
    opacity: 1;
    } to {
    transform: translate(-300px) rotate(10deg);
    opacity: 0;
    }
}

    @keyframes esquerda {
    from{
    transform: translate(0) rotate(0);
    opacity: 1;
    } to {
    transform: translate(300px) rotate(-10deg);
    opacity: 0;
    }
}
   
`;

export const Imagem = styled.img`
    width:450px;
    height: 400px;
    justify-content:flex-start;
    object-fit:cover;
`;

export const CardContainer = styled.div`
    display:flex;
    width:450px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding: 10px;
    background-color:white;
    /* border: 1px solid; */
`;


export const Dados = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:10px;
    color:#68164f;
`;

export const Nome = styled.h1`
    padding-right: 20px;
    font-weight:bold;
    font-size:30px;
    
`;

export const Idade = styled.p`
    padding-left: 10px;
    font-size:20px;
`;

export const Bio = styled.p`
    justify-content:center;
    width:25vw;
    color: #515151;
    text-align: center;
`

export const Botoes = styled.div`
    margin:20px;
    display:flex;
    justify-content:space-around;
   
`;

export const BotaoImgem = styled.img`
    width:40px;
    margin-left: 30px;
    margin-right:30px;
    &:hover{
        transform: scale(1.1);
        cursor:pointer;

    },


    


`
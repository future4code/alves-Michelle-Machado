import styled from 'styled-components'
import banner from '../../assets/banner.jpg'

export const Background = styled.section`
    height:100vh;
    width:100%;
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner});
    background-position:center;
    background-size:cover;
    position:absolute;
`;

export const Formulario = styled.div`
    width: 380px;
    height: 480px;
    position:relative;
    margin: 6% auto;
    background: #fff;
    padding: 5px;
    overflow:hidden;
`;

export const ButtonBox = styled.div`
    width:220px;
    margin:35px auto;
    position:relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius:30px;
`;

export const Button = styled.button`
    padding: 10px 30px;
    cursor:pointer;
    background: transparent;
    border:0;
    outline:none;
    position:relative;
`;

export const btn = styled.div`
    top:0;
    left:0;
    position:absolute;
    width:110px;
    height:100%;
    background:linear-gradient(to right, #ff105f, #ffad06);
    border-radius: 30px;
    transition: .5s;
`;

export const SocialIcones = styled.div`
    margin:30px auto;
    text-align:center;
`;

export const IconImage = styled.img`
    width:30px;
    margin:0 12px;
    box-shadow: 0 0 20px 0 #7f7f7f3d; 
    cursor:pointer;
    border-radius: 30px;
`;

export const ContainerInput = styled.form `
    display:flexbox;
    position:absolute; 
    left:0px;

`

export const InputGroupLogin = styled.div`
    position:absolute;
    left:433px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border:1px solid; */
    width: 380px;
    transition: .5s;
`;

export const InputGroupSignUp = styled.div`
    position:absolute;
    left:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border:1px solid; */
    width: 380px;
    transition: .5s;
`;


export const Checkbox = styled.input`
    margin: 30px 10px 30px 0;
`

export const span = styled.span`
    color: #777;
    font-size: 12px;
    bottom: 68px;
    postion:absolute;
`

export const SubmitButton = styled.button`
    width: 60%;
    padding: 10px 30px;
    cursor:pointer;
    display:block;
    margin:auto;
    background:linear-gradient(to right, #ff105f, #ffad06);
    border:0;
    outline: none;
    border-radius: 30px;
`




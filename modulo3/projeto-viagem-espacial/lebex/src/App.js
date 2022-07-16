import React from 'react';
import {Router} from "./routes/Router"


function App() {
  return (
    <div>
      {/*
        
        AUTENTICAR: É saber quem é o usuário. O backend é resposável por armazenar essas 
        informações do usuários e confirma se as informações estão corretas. 
        AUTORIZAR: É saber o que ele pode fazer .

        Fluxo Comum: 1. Usuario envia as informações (email + senha) para o back-end; 2. O back-end responde
        com um token; 3. O front armazena esse token; 4. Com as requisições protegidas, o front envia o token 
        e o back responde com os dados protegidos

        PADRÃO DE TOKEN: JWT - é uma string encriptada. Precisamos armazena-lo para que seja validado nas
        proximas requisições. As duas opções de armazenamento são os Cookies e o LocalStorage
        
        */}
      <Router />
    </div>
  );
}

export default App;

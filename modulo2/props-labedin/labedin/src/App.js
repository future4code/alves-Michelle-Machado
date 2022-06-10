import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';

import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.postimg.cc/bvkWn31F/122594522-649504999091007-8812708742239177130-n.jpg" 
          nome="Michelle da Rosa Machado" 
          descricao="Ola, meu nome é Michelle, tenho 24 anos. Me formei em marketing e estou estudando programação na Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1654620320~hmac=eaa2046c1b0279410974461425951f16" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1654618942~hmac=db6e057e08ed9c8133221760f1591076"
        email="Email: machado.profile@gmail.com"
      />

      <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/484/484167.png"
        endereco="Endereço: Rua Tenente-Coronel Cardoso, Centro - Campos dos Goytacazes/RJ"
      />
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

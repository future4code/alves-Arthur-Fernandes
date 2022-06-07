import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEndereco from './components/img/address.png'
import ImagemEmail from './components/img/email.png'
import Seta from './components/img/seta.png'
import Perfil from './components/img/laure.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil} 
          nome="Arthur" 
          descricao="Oi, eu sou o Arthur. Sou um aluno da Labenu. Estou estudando para me tornar um Dev WebFullStack, já sei utilizar as tecnologias HTML CSS JavaScript e atualmente estou aprendendo React. Já trabalhei como WebManager e atuo como professor de inglês."
        />
        
        <ImagemButton 
          imagem={Seta} 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
          <CardPequeno
            imagem ={ImagemEmail}
            titulo ="Email: "
            descricao =" meuemaillabenu@labenu.lab"
            />
          <CardPequeno
            imagem ={ImagemEndereco}
            titulo ="Endereço: "
            descricao =" Rua Labelol 57"
            />
      </div>
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

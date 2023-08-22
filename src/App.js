import perfil_01 from "./img/perfil_01.svg";
import perfil_02 from "./img/perfil_02.svg";
import phoneIcon from "./img/phone.svg";
import fieldIcon from "./img/field.svg";
import img_01 from './img/img_01.svg';

import './App.css';

import Message from "./components/Message";

function App() {
  return (
    <main className="app">
      <div className="card">
        <header className='header'>
          <div className='header-rectagle' />
        </header>
        
        <section>
          <h1 className='title'>Encontre <span className='text-contrast'>Fábio</span> no local de partida</h1>
          <h2 className='subTitle'>Chega em 3 minutos (800 metros)</h2>
        </section>

        <div className='section-analysis'>
          <img className='img' src={img_01} alt='Foto do usuário com carro'/>
          <span>
            <h1 className='title'>BCD0D19</h1>
            <h2 className='subTitle'>Honda Civic Roxo</h2>
          </span>
        </div>

        <section className='section-contact'>
          <input placeholder='Enviar mensagem para Fábio...' className='input' />
          <div className="section-contact">
            <button className='button'>Publicar</button>
            <picture className='section-contact-icons'>
              <img src={phoneIcon} className="icons" />
              <img src={fieldIcon} className="icons" />
            </picture>
          </div>
        </section>

        <section className="section-message">
          <Message 
            message="Boris estou no local já lhe esperando. estou com camisa azul e calça jeans" 
            imgPerfil={perfil_01} 
          />
          <Message 
            message="Acabei de lhe ver. Vou estacionar o carro próximo." 
            imgPerfil={perfil_02} 
          />
        </section>
      </div>
    </main>
  );
}

export default App;

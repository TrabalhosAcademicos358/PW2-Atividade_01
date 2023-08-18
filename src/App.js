import img_01 from './img/img_01.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="card">
        <header className='header'>
          <div className='header-rectagle' />
        </header>
        
        <span>
          <h1 className='title'>Encontre <span className='text-contrast'>Fábio</span> no local de partida</h1>
          <h2 className='subTitle'>Chega em 3 minutos (800 metros)</h2>
        </span>

        <div className='section-analysis'>
          <img className='img' src={img_01} alt='Foto do usuário com carro'/>
          <span>
            <h1 className='title'>BCD0D19</h1>
            <h2 className='subTitle'>Honda Civic Roxo</h2>
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;

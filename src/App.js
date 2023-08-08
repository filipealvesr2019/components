
import './App.css';
import Button from './components/Button';
import Escudo from './components/Escudo';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagina from './components/Pagina';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pagina/>
      <Button/>
      <Escudo/>
      <Footer/>
    </div>
  );
}

export default App;

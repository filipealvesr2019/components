
import './App.css';
import Button from './components/Button';
import Escudo from './components/Escudo';
import Header from './components/Header';
import Pagina from './components/Pagina';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pagina/>
      <Button/>
      <Escudo/>
    </div>
  );
}

export default App;

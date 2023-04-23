import './App.css';
import ItemCard from './components/ItemCard';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer greeting="Bienvenido" />
      </main>
    </div>
  );
}

export default App;

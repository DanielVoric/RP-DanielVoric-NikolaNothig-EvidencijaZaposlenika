import './App.css';
import ListaZaposlenikaC from './komponente/ListaZaposlenikaC';
import PodnozjeC from './komponente/PodnozjeC';
import ZaglavljeC from './komponente/ZaglavljeC';

function App() {
  return (
    <div >
      <ZaglavljeC/>
      <ListaZaposlenikaC />
      <PodnozjeC />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import ListaZaposlenikaC from './komponente/ListaZaposlenikaC';
import PodnozjeC from './komponente/PodnozjeC';
import ZaglavljeC from './komponente/ZaglavljeC';
import DodajZaposlenikaC from './komponente/DodajZaposlenikaC';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ZaglavljeC />
        <Routes>
          <Route index element={<ListaZaposlenikaC />} />
          <Route path="/" element={<ListaZaposlenikaC />}></Route>
          <Route path="/zaposlenici" element={<ListaZaposlenikaC />}></Route>
          <Route path="*" element={<ListaZaposlenikaC />}></Route>
          <Route path="/dodaj-zaposlenika" element={<DodajZaposlenikaC />}></Route>
          <Route path="/uredi-zaposlenika/:id" element={<DodajZaposlenikaC />}></Route>
        </Routes>
        <PodnozjeC />
      </BrowserRouter>
    </div>
  );
}





export default App;

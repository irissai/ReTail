import './App.css';
import NavbarTop from './main/navbar/NavbarTop';
import NavbarLeft from './main/navbar/NavbarLeft';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Buttons from './components/buttons/Button';
import Alerts from './components/alerts/Alert'
import Cards from './components/cards/Card'
import Forms from './components/forms/Form'
import BoxShawdow from './components/box-shawdow/BoxShadow'

function App() {


  return (
    <div className="flex flex-col min-h-screen bg-[#050614] text-[#9881ff]">
      <header>
        <NavbarTop />
      </header>

      <main className="flex flex-1">
        <nav className="w-[20%]">
          <NavbarLeft />
        </nav>
        <article className="w-[80%] p-4 relative">
          <Routes>
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/box-shawdow" element={<BoxShawdow />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </article>
      </main>

      <footer className="p-4">
        Footer
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import CountDown from './components/CountDown/CountDown';
import Card from './components/Card/Card';
import Carrusel from './components/Carrusel/Carrusel';
import Asistencia from './components/Asistencia/Asistencia';
import Regalos from './components/Regalos/Regalos';
import Canciones from './components/Canciones/Canciones';
import Footer from './components/Footer/Footer';
import Separador from './components/Separador/Separador';

function App() {
  return (
    <div className="App">
      <Header/>
      <CountDown/>
      <Carrusel/>
      <Separador/>
      <Card/>
      <Canciones/>
      <Regalos/>
      <Asistencia/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import freeCodeCampLogo from './imagenes/freecodecampLogo.png';
import Boton from './componentes/Boton.js';

function App() {
  return (
    <div className="App">
       <div className="freecodecamp-logo-contenedor">
       <img
       src={freeCodeCampLogo}
       className="freecodecamp-logo"
       alt="Logo de freeCodeCamp" />
    </div>
    <div className='contenedor-calculadora'>
      <div className='fila'></div>
         <Boton>1 </Boton>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>

    </div>
    </div>
  
  );
}

export default App;

import { useState } from 'react';
import Botones from './components/Botones';
import EliminarBoton from './components/EliminarBoton';
import Resultados from './components/Resultados';
import './styles/Contenedor-principal.css';
import { evaluate } from 'mathjs'

function App() {

  const [val, setVal] = useState('')

  const handleClick = vall => {
    setVal(val + vall)
  }

  const handleIgual = () => {
    setVal(evaluate(val))
  }

  const handleClear = () => {
    setVal('')
  }

  return (
    <div className="App">
      <h1 className='titulo'>Calculadora</h1>
      <div className="contenedor-principal">
        <Resultados result={val} />
      <div className='fila'>
        <Botones manejarEvent={handleClick}>1</Botones>
        <Botones manejarEvent={handleClick}>2</Botones>
        <Botones manejarEvent={handleClick}>3</Botones>
        <Botones manejarEvent={handleClick}>+</Botones>
      </div>
      <div className='fila'>
        <Botones manejarEvent={handleClick}>4</Botones>
        <Botones manejarEvent={handleClick}>5</Botones>
        <Botones manejarEvent={handleClick}>6</Botones>
        <Botones manejarEvent={handleClick}>-</Botones>
      </div>
      <div className='fila'>
        <Botones manejarEvent={handleClick}>7</Botones>
        <Botones manejarEvent={handleClick}>8</Botones>
        <Botones manejarEvent={handleClick}>9</Botones>
        <Botones manejarEvent={handleClick}>*</Botones>
      </div>
      <div className='fila'>
        <Botones manejarEvent={handleIgual}>=</Botones>
        <Botones manejarEvent={handleClick}>0</Botones>
        <Botones manejarEvent={handleClick}>.</Botones>
        <Botones manejarEvent={handleClick}>/</Botones>
      </div>
      <div className='fila'>
        <EliminarBoton limpiar={handleClear}>Limpiar</EliminarBoton>
      </div>
      </div>
    </div>
  );
}

export default App;

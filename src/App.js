
import { useState } from 'react';
import Botones from './components/Botones';
import EliminarBoton from './components/EliminarBoton';
import Resultados from './components/Resultados';
import './styles/Contenedor-principal.css';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';

function App() {

  const [val, setVal] = useState('')

  const handleClick = vall => {
    setVal(val + vall)
  }

  const handleIgual = () => {

    if(val === '+' || val === '-' || val === '*' || val === '/' || val === '.') {
      setVal('')
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se puede realizar operaciones sin numeros',
        timer: 7000,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }

    if(val === ''){
      return Swal.fire({
        icon: 'error',
        title: 'Ooops Error',
        text: 'No se puedes realizar el igual si no tienes una operación por realizar',
        timer: 7000
      })
    }else {

      setVal(evaluate(val))
    }

  }

  const handleClear = () => {

    if(val === ''){
      return Swal.fire({
        icon: 'info',
        titleText: 'No se encontro ningun caracter que eliminar',
        timer: 3000
      })
    }else {
      setVal('')
    }
  }

  return (
    <div className="App">
      <h1 className='titulo'>Calculadora</h1>
      <div className="contenedor-principal shadow-lg">
        <Resultados result={val} />
      <div className='fila'>
        <Botones manejarEvent={handleClick}>1</Botones>
        <Botones manejarEvent={handleClick}>2</Botones>
        <Botones manejarEvent={handleClick}>3</Botones>
        <Botones manejarEvent={handleClear}><i className="bi bi-arrow-left-circle-fill" /></Botones>
      </div>
      <div className='fila'>
        <Botones manejarEvent={handleClick}>4</Botones>
        <Botones manejarEvent={handleClick}>5</Botones>
        <Botones manejarEvent={handleClick}>6</Botones>
        <Botones manejarEvent={handleClick}>+</Botones>
      </div>
      <div className='fila'>
        <Botones manejarEvent={handleClick}>7</Botones>
        <Botones manejarEvent={handleClick}>8</Botones>
        <Botones manejarEvent={handleClick}>9</Botones>
        <Botones manejarEvent={handleClick}>-</Botones>
      </div>
      <div className='fila'>
        <Botones manejarEvent={handleClick}>0</Botones>
        <Botones manejarEvent={handleClick}>.</Botones>
        <Botones manejarEvent={handleClick}>/</Botones>
        <Botones manejarEvent={handleClick}>*</Botones>
      </div>
      <div className='fila'>
        <EliminarBoton limpiar={handleIgual}>=</EliminarBoton>
      </div>
      </div>
    </div>
  );
}

export default App;

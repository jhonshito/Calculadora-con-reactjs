
import '../styles/Estilos-botones.css';
const Botones = (props) => {

  const operador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== `${<div className='eliminar'><i className="bi bi-arrow-left-circle-fill"></i></div>}`);
  }
  return (
    <div className={`btn ${operador(props.children) ? 'operador' : null}`}
      onClick={() => props.manejarEvent(props.children)}
    >
        {props.children}
    </div>
  )
}

export default Botones
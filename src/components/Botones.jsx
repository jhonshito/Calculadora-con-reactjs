
import '../styles/Estilos-botones.css';
const Botones = (props) => {

  const operador = (valor) => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
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
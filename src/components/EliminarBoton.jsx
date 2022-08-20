
import '../styles/Estilos-eliminarBoton.css';
const EliminarBoton = (props) => {
  return (
    <div className='limpiar' onClick={() => props.limpiar()}>
      {props.children}
    </div>
  )
}

export default EliminarBoton

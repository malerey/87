import "./Tarjeta.css"
import Boton from './Boton'
// los componentes de React siempre reciben un tipo de parametro: un objeto
// A este objeto lo llamamos "props". 

const Tarjeta = (props) => {

  console.log('props', props)
  // console.log('props.nombre', props.nombre)

  // EJERCITACION:
  // Usando los componentes Tarjeta de la clase 86, crear Taretas que representen
  // productos. Cada una de ellas tiene que recibir por props un "precio" y mostrarlo.
  // No son necesarias las imagenes 

  return (
    <article className="tarjeta">
      <h2>Hola, me llamo {props.nombre} y tengo {props.edad} años</h2>
      
      {/* props drilling: pasar props de un componente a otro  */}
      <Boton mensaje={props.nombre === "Sol" ? "Chau" : "Hola"} nombre={props.nombre}/>
    </article>
  )
}

export default Tarjeta;

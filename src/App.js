import './App.css';
import Tarjeta from './components/Tarjeta';

const App = () => {

  const nombreDeLaProfe = "Malena"

  return (
    <div>
    Hola, chicas
    {/* 
    Puedo pasar cualquier dato como parametro de un componente: (props)
    Pero lo ideal es enviar siempre los mismos
    <Tarjeta 
      nombre="Ana" 
      edad={22}
      booleano={true} 
      funcion={() => console.log("hola")} 
      objeto={ {persona: "Hola", edad: 23 } }
      array={[1, 2, 3, 4, 5]}
      comillasMagicas={`Hola`}

      /> */}
    <Tarjeta nombre="Maca" edad="25" nombreProfe={nombreDeLaProfe}/>
    <Tarjeta nombre="Rosy" edad="29"/>
    <Tarjeta nombre="Sol" edad="21" />
    <Tarjeta  />

    </div>
  );
}

export default App;

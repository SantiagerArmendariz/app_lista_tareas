import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './Components/Header';
import FormularioTareas from './Components/FormularioTareas';
import ListaTareas from './Components/ListaTareas';

const App = () => {

  //obtenemos las tareas guardadas de local storage
  const tareasGuardadas =
  localStorage.getItem('tareas') ?
  JSON.parse(localStorage.getItem('tareas')) : []; 

  // Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(
    tareasGuardadas
  );

    //guardando el estado dentro de local storage
  useEffect( () => {
     localStorage.setItem('tareas', JSON.stringify(tareas))
   }, [tareas]);

   let configMostrarCompletadas = '';
   if(localStorage.getItem('mostrarCompletadas') == null){
    configMostrarCompletadas = true;
   } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
   }
  
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);
  

  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
      tareas={tareas} 
      cambiarTareas={cambiarTareas}
      mostrarCompletadas={mostrarCompletadas} 
      />
    </div>
  );
}

export default App;
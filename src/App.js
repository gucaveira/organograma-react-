import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setcolaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
      console.log(colaborador)
      setcolaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={ 
        colaborador => aoNovoColaboradorAdicionado(colaborador) }/>
        <Time nome="Programação"/>
        <Time nome="Frontend"/>
        <Time nome="Data Science"/>
    </div>
  );
}

export default App;

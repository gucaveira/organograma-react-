import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

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
    </div>
  );
}

export default App;

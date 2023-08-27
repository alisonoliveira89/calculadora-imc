import { useState } from "react";
import Tabela from "./components/Tabela";

function App() {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();

  const [resultado, setResultado] = useState();

  function calculaIMC() {
    const formulaIMC = peso / (altura * altura);
    setResultado(formulaIMC.toFixed(1));
  }

  return (
    <>
      <div className="container">
        <form className="formImc">
            <label htmlFor="altura">Altura</label>
            <input type="number" id="altura" placeholder="(Ex: 1,80)" onBlur={(e) => setAltura(e.target.value)} />
          
            <label htmlFor="peso">Peso</label>
            <input type="number" id="peso" placeholder="(Ex: 80)" onBlur={(e) => setPeso(e.target.value)} />
          
            <button type="button" onClick={calculaIMC}>
              Calcular
            </button>
        </form>        
        {resultado > 0 ? (
          <div className="resultado">
            <h3>Seu IMC é: {resultado}</h3>
          </div>
        ) : (<></>)}        
        <Tabela resultado={resultado} />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [novoTexto, setNovoTexto] = useState();
  function mudarEstilo() {
    setNovoTexto("Feito por Otávio Aparecido Simoncini");
  }
  function apagarTexto() {
    setNovoTexto("");
  }
  return (
    <div className="bg-gray-200 flex flex-col w-screen h-screen items-center justify-center">
      <div className="bg-white mx-auto p-4 flex justify-center items-center flex-col gap-7">
        <h1 className="font-bold text-2xl">Inserindo e removendo texto</h1>
        <div className="bg-blue-600 py-2 px-4 text-white w-11/12 h-12 flex items-center rounded-3xl">
          <p>{novoTexto}</p>
        </div>
        <button
          className="bg-green-500 py-2 px-4 rounded-2xl"
          onClick={mudarEstilo}
        >
          Gerar Texto
        </button>
        <button
          className="bg-green-500 py-2 px-4 rounded-2xl"
          onClick={apagarTexto}
        >
          Apagar Texto
        </button>
      </div>
    </div>
  );
}

export default App;

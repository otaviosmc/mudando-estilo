import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [novoEstilo, setNovoEstilo] = useState("w-24 h-24 bg-red-600");
  function mudarEstilo() {
    setNovoEstilo("w-24 h-24 bg-blue-600");
  }
  return (
    <div className="bg-gray-200 flex flex-col w-screen h-screen items-center justify-center">
      <div className="bg-white mx-auto p-4 flex justify-center items-center flex-col gap-7">
        <h1 className="font-bold text-2xl">Mudando estilo</h1>
        <div className={novoEstilo}></div>
        <button
          className="bg-green-500 py-2 px-4 rounded-2xl"
          onClick={mudarEstilo}
        >
          Mudar Estilo
        </button>
      </div>
    </div>
  );
}

export default App;

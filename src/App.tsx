import { useState } from "react";

import { FaTemperatureLow } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App flex text-white bg-cover bg-[url('./media/nublado.jpg')] h-screen">
      <div className="w-1/4 border- justify-center rounded-t-3xl rounded-b-3xl backdrop-blur-sm border-r-2">
        <div className="flex items-center mx-auto w-5/6 justify-center mt-6 hover:border-b-2">
          <FaTemperatureLow size={20} />
          <input
            className="bg-transparent text-lg text-white border-b-neutral-900 text-center outline-none"
            type="text"
            placeholder="Cidade"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => alert("Buscando: " + search)}>
            <BiSearchAlt size={25} />
          </button>
        </div>
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl mt-2 w-full pl-4 font-bold text-white">
          Dev Weather
        </h1>
      </div>
    </div>
  );
}

export default App;

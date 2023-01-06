import { useState } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";

import { FaTemperatureLow } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

function App() {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState({ name: "" });

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${search},br&APPID=698f0ecd8acf094e8fc5b437abda98ea`;

  const handleWeather = async () => {
    await axios.get(url).then((response: AxiosResponse) => {
      setValue(response.data);
    });
    console.log(value);
    setSearch("");
  };

  return (
    <div className="App flex text-white bg-cover bg-[url('./media/nublado2.jpg')] h-screen">
      <div className="w-1/4 border- justify-center rounded-t-3xl rounded-b-3xl backdrop-blur-sm border-r-2">
        <div className="flex items-center mx-auto w-5/6 justify-center mt-6  border-b-2 border-b-transparent hover:border-b-white">
          <FaTemperatureLow size={20} />
          <input
            className="bg-transparent text-lg text-white border-b-neutral-900 text-center outline-none"
            type="text"
            placeholder="Cidade"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button disabled={!search} onClick={handleWeather}>
            <BiSearchAlt size={25} />
          </button>
        </div>
        <div className="flex justify-center mt-20">
          <h3 className="text-6xl">graus°</h3>
        </div>
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl mt-2 w-full pl-4 font-bold text-white">
          Dev Weather
        </h1>
        <div>
          <h3 className="text-center text-6xl">{value.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

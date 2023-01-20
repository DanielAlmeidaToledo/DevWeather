import { useState } from "react";

import axios from "axios";
import { AxiosResponse } from "axios";

import { FaTemperatureLow } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import dwLogo from "./media/dwLogo.png";

import Footer from "./Footer";
import clsx from "clsx";

type Props = {
  main: { temp: number; temp_max: number; temp_min: number; humidity: number };
  name: string;
  weather: [{ main: string; description: string; icon: string }];
  sys: { country: string };
};

function App() {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState<Props>({} as Props);
  const [background, setBackground] = useState("");

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${search},br&APPID=698f0ecd8acf094e8fc5b437abda98ea`;

  const handleWeather = async () => {
    await axios.get(url).then((response: AxiosResponse) => {
      setValue(response.data);
      setBackground(response.data.weather[0].main);
    });
    setSearch("");
  };

  const kelvin = 273.15;

  return (
    <div
      className={clsx("App flex text-white bg-cover h-screen", {
        "bg-[url('./media/clouds.jpg')]":
          background === "" || background === "Clouds",
        "bg-[url('./media/thunderstorm.jpg')]": background === "Thunderstorm",
        "bg-[url('./media/Drizzle.jpg')]": background === "Drizzle",
        "bg-[url('./media/Rain.jpg')]": background === "Rain",
        "bg-[url('./media/Snow.jpg')]": background === "Snow",
        "bg-[url('./media/Clear.jpg')]": background === "Clear",
      })}
    >
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
        {value?.main?.temp !== undefined && (
          <div className="flex flex-wrap h-96 my-20 items-center justify-center">
            <h3 className="text-6xl w-full text-center pt-20">
              {Math.trunc(value.main.temp - kelvin)}
              <span>&#x2103;</span>
            </h3>
            <div className="text-2xl pb-20">
              <p className="w-full pt-3">
                Max: {Math.trunc(value.main.temp_max - kelvin)}
                <span>&#x2103;</span>
              </p>
              <p className="w-full pt-3">
                Min: {Math.trunc(value.main.temp_min - kelvin)}
                <span>&#x2103;</span>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-3/4">
        <div className="w-full mt-2 flex justify-end items-center py-2">
          <img className="w-10" src={dwLogo} alt="Logo" />
          <h1 className="text-4xl italic px-4 font-bold text-white">
            Dev Weather
          </h1>
        </div>
        {value?.name !== undefined && (
          <div className="mt-10">
            <h3 className="text-6xl text-center">
              {value.name}, {value.sys.country}
            </h3>
            <div className="mt-20 mx-36 flex justify-around">
              <div>
                <p className="text-5xl py-5">{value.weather[0].main}</p>
                <p className="text-3xl">{value.weather[0].description}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
                  alt="Icon Weather"
                  className="mt-5"
                />
              </div>
              <div>
                <p className="text-5xl py-5">Humidity</p>
                <p className="text-3xl">{value.main.humidity}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

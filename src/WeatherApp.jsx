import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    feelsLike: 21.2,
    humidity: 48,
    temp: 21.72,
    tempMax: 21.72,
    tempMin: 21.72,
    weather: "clear sky",
    city: "Shrigonda",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className=" grid grid-cols-12  m-4 ">
      <div className="col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>
      <div
        className="
       col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-4
       text-center flex-col justify-center items-center  bg-slate-400 rounded-lg p-4"
      >
        <h2 className="font-bold text-2xl">Weather App by Nikhil</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}

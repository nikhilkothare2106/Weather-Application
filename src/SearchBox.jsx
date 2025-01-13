import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = ""; //your api key

  let getWeatherInfo = async () => {
    try {
      let response = await (
        await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      ).json();

      let result = {
        city: city,
        temp: response.main.temp,
        tempMin: response.main.temp_min,
        tempMax: response.main.temp_max,
        humidity: response.main.humidity,
        feelsLike: response.main.feels_like,
        weather: response.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="text-center m-4">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          size="small"
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p className="text-red-700">No Such Place exists !</p>}
      </form>
    </div>
  );
}

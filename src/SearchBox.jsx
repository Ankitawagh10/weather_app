import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState('');
  
  let [error, setError] = useState(false);
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '5c599d0f170c1e7134a2f162d685651f';

  let getWeatherInfo = async () => {
   try{


  
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
  
};
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try{

    
    evt.preventDefault();
    console.log(city);
    setCity('');
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo); // Uncomment this line to call the updateInfo function
    }catch(err){
    setError(true);
    }
  
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Search
        </Button>

        <br />
        <br />
        {error && <p>No such place exists!</p>}
        <br />
      </form>
    </div>
  );

}
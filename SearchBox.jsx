import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useState } from "react";
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    //we can add all these api related info in different file
    const API_KEY="ae350be19c4496ba763ca36f37c8726d";
    //api for the data use kiya hai
    let getWeatherInfo=async()=>{
    try{
       //asynchronous isliye kuki api call krhe h
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       console.log(jsonResponse);
       let result={
          city:jsonResponse.name,
          temp:jsonResponse.main.temp,
          tempMin:jsonResponse.main.temp_min,
          tempMax:jsonResponse.main.temp_max,
          humidity:jsonResponse.main.humidity,
          feelsLike:jsonResponse.main.feels_like,
          weather:jsonResponse.weather[0].description

       };
       console.log(result);
       return result;
    }
    catch(err){
        throw err;
    }
    }
    
    let handleChange=(event)=>{
        setCity(event.target.value);

    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
        setCity("");
        getWeatherInfo();
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);

        }catch(err){
            setError(true);
        }
        
    }

  return(
    <div className='searchbox'>
       
        <h2>Weather app</h2>
        <form onSubmit={handleSubmit}>
        
        <TextField id="outlined-basic" label="City Name" variant="outlined" required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit" 
        
        >Search</Button>
        {error && <p>No such place exist</p>}

        </form>
    </div>
  )  
}
import SearchBox from"./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function weather(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })
    let updateInfo=(result)=>{
       setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
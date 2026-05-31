import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { Info } from "@mui/icons-material";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kanpur",
        feelsLike: 35.12,
        humidity: 33,
        temp: 34.86,
        tempMax: 34.86,
        tempMin: 34.86,
        weather: "clear sky",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(

        <div className="WeatherApp" style={{ textAlign: "center"}}>
            <h1>Weather Widget</h1>
            <br></br>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
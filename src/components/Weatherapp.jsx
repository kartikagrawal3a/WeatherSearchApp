import React, { useEffect, useState } from 'react';
import './style.css';
import Morning from './images/1.jpeg';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Weatherapp = () => {
    const [val, setVal] = useState(Morning);
    const [city, setCity] = useState(null);
    const [city1, setCity1] = useState(null);
    const [search, setSearch] = useState("Mathura");
    useEffect(()=>{
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bba8e2ffb63172d92e58a4c58019e6b8`;
            const response = await fetch(url);
            console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
            setCity1(resJson.weather);
        }
        fetchApi();

    },[search])
    const mainstyle = {
        backgroundImage : `url(${val})`,
        backgroundSize : "100% 100%",
        position : "absolute",
        height : "100vh",
        width : "100%",
        paddingTop : "100px",
        zIndex : "100"
    }

    

    return(
        <div style={mainstyle}>
            <div className="searchBox">
                <input type="search" placeholder="Enter Location" onChange={(e)=> {
                    setSearch(e.target.value);
                }} />
            </div>
            <div className="info">
            {
                !city?(
                        <p className="error">No City Found</p>
                    ):
                    (
                        <div>
                            <p className="city"><span><AcUnitIcon fontSize="large" /></span><span>{search}</span></p>
                            <p>{city.temp}°C</p>
                            {
                                !city1?(
                                        <p>No Weather</p>
                                    ):
                                    (
                                        <p>{city1[0].main}</p>
                                    )
                            }
                            <p>Min : {city.temp_min}°C | Max : {city.temp_max}°C</p>
                        </div>
                    )
            }
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Weatherapp;
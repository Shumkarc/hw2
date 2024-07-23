import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {
    const [city,setCity] = useState('')
    const [weatherData,setWeatherData] = useState(null)


    const getWeather = ()=>{
        const key = '68a6295309a0646cf22698439d4884ad'
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(res=>{
            const data = res.data 
            setWeatherData(data)
            console.log(data);
        })
        .catch(error => {
            console.error('error:',error)
        })





    }

  return (
    <div className='form'>
        <input type="text" value={city} onKeyDown={e=>{
            if(e.keyCode === 13){
                getWeather(city)
            }
        }} 
        onChange={e=>{
            setCity(e.target.value)
        }}
        />
        <button onClick={() => getWeather(city)}>Get Weather</button>


        {weatherData &&(
            <div className='weather-info'>
                <h2>Weather in {weatherData.name}</h2>
                <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                    <p>Feels Like: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Pressure: {weatherData.main.pressure} hPa</p>
            </div>
        )}
      


        
    </div>
  )
}















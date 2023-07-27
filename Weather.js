import React from 'react'
import { useState } from 'react'
import './Weather.css'

export default function Weather() {
    const [search,setSearch]=useState("")
  const [weather,setWeather]=useState({})
  const [check,setCheck]=useState(false)
  const api={
    key:'57d09ef7ef83441be6e9a5906da1386b',
    base:'https://api.openweathermap.org/data/2.5/',
  }
  const searchPressed=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(result=>{
      setWeather(result)
      console.log(result)
      setCheck(true)
    })
  }
  return (
    <div className='weather'>
      <h1>Weather</h1>
      <div className='search'>
      <input type="text" placeholder="Enter city" 
      onChange={(e)=>{
       setSearch(e.target.value)
      }}/>
      <button onClick={searchPressed}>Search</button>
      </div>
      {check && 
      <div>
      <p>{weather.name}</p>
      <p>{weather.main.temp}</p>
      <p>{weather.weather[0].main}</p>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp}/</p>
      <p>{weather.sys.country}</p>
      <p>{weather.visibility}</p>
      <p>{weather.wind.deg}</p>
      <p>{weather.wind.gust}</p>

      <p>{weather.wind.speed}</p>

      </div>
      }
    </div>
  )
}

import React, { useState, useEffect } from 'react'

export default function GetWeatherData() {
    const [city, setCity] = useState('')
    const API_KEY = `a2cf237bfa5d8eaf66a9ab41a98bbcb1`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const [isloaded, setisloaded]=useState(false)
    const [error, seterror]=useState('')
    const [WeatherData, setWeatherData] = useState({})
   
    const GetData = (city) => {
        if(!city) return
        fetch(url).then(res => res.json())
        .then((result)=>{
            //console.log(result)
            setWeatherData(result)
            setisloaded(true)
            console.log(result)
        },
        (err)=>{
            seterror(err)
            setisloaded(true)
           // console.log(error.message)
        })

    }
    const handleChange = (event) => {
        setCity(event.target.value)
        //console.log(city)
    }
    const handleClick = () => {
        GetData(city)
    }
    // useEffect(()=>{
    //     GetData('Delhi')
    // },[])
    return (
       
            <div className="heading weather">
                <h1 className='text-light'>Weather App</h1>
                <div className="searchbox">
                    <input type="text" placeholder='Enter Your City/District Name' onChange={handleChange} />
                    <button type='button' onClick={handleClick}>Search</button>
                </div>
                
                <div className="report">
                   {error.length >0 && <h3>{error.message}</h3>}
                   {!isloaded && <h4>Loading...</h4>}
                   {Object.keys(WeatherData).length > 0 &&
                   <div className='text-light'>
                    <h2 className=''>Location - {WeatherData.name}</h2>
                    <h3 >Current Temprature - {WeatherData.main.temp}°C</h3>
                    <h3> Air Pressure - {WeatherData.main.pressure}</h3>
                    </div>}
                </div>
               
            </div>
        
    )
}


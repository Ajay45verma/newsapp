//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//const API_KEY=`a2cf237bfa5d8eaf66a9ab41a98bbcb1`
import React, { useState, useEffect } from 'react';
 import WeatherSearch from './WeatherSearch';


export default function WeatherNews(props) {
    const city = props.city
        //console.log(city)
    const [isloaded, setIsloaded] = useState(false)
    const [error, setError] = useState('')
    const [weatherData, setweatherData] = useState([])
    const API_KEY = `a2cf237bfa5d8eaf66a9ab41a98bbcb1`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    useEffect(() => {
        if (city) {
            fetch(url).then(res => res.json())
                .then((result) => {
                        setweatherData(result)
                        setIsloaded(true)
                            // console.log(weatherData)

                    },
                    (error) => {
                        setIsloaded(true)
                        setError(error)

                    })
        }
    }, [])

    if (error) {
        return ( <div className = "container-fluid" > Error: { error.message } </div>
        )
    } else if (!isloaded) {
        return ( < div className = "container-fluid" > Loading... </div>
        )
    } else {
        console.log(weatherData)
        return ( <div className = "container-fluid" >
            < h2 > Location: { weatherData.name } </h2> 
            <h4> Geometrical Postion: ({ weatherData.coord.lon }, { weatherData.coord.lat }) </h4> 
            </div>
        )
    }

}
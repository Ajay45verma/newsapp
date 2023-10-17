import React, {useState} from 'react'
import WeatherNews from './WeatherNews'

export default function WeatherSearch() {
const [cityName, setcityName] = useState('')
const [Updatecity, setUpdatecity]=useState('')
const HandleChange=(event)=>{
setcityName(event.target.value)
}
const HandleClick=()=>{
    setUpdatecity(cityName)
    //document.getElementById('citysearch').innerText=''
   // console.log(Updatecity)
}
if(Updatecity){
    return(
        <div className='container'>
        <input type="text" id='citysearch' placeholder='Enter Your City Name' onChange={HandleChange}/>
        <button onClick={HandleClick}>Search</button>
        <WeatherNews city={cityName} />
    </div>
      
    )
}
else{
return(
    <div className='container'>
        <input type="text" id='citysearch' placeholder='Enter Your City Name' onChange={HandleChange}/>
        <button onClick={HandleClick}>Search</button>
      
    </div>
)}
}
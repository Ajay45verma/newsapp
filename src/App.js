import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyComponent from './components/India';
import WorldNews from './components/WorldNews';
import WeatherNews from './components/WeatherNews';
import WeatherSearch from './components/WeatherSearch';
import GetWeatherData from './components/GetWeatherData';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Layout from './components/Layout';
// import WeatherNews from './components/WeatherNews';
// import WorldNews from './components/WorldNews';

export default class App extends Component {
    render() {
        return ( <div >
            <Navbar/ >

            {/* <WorldNews/> */}

            
                 <BrowserRouter>
                   <Routes>
                        <Route path="/" element={<Layout />} >
                         <Route path="home" element={<Home />} />
                          <Route path="blogs" element={<Blogs />} />
                         
                        </Route>
                       </Routes>
                   </BrowserRouter>   
             </div>
        )
    }
}
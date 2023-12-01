import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Index from "./components/Index/index";


class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Index} />
          <Route path='/contact' Component={Contact} />
        </Routes>
     </BrowserRouter>
    );
  }
}

export default App;
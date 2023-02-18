import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./container/Homepage/Homepage";
import Services from "./container/Services/Services";
import Welcome from "./container/Welcome/Welcome";


function App() {
  return <>
    <Navbar/>
    <Homepage/>
    <Services/> 
    <Welcome/>
    <Footer/>
  </>;
}

export { App };

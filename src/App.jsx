import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./container/Homepage/Homepage";
import Services from "./container/Homepage/Services/Services";

function App() {
  return <>
    <Navbar/>
    <Homepage/>
    <Services/> 
  </>;
}

export { App };

import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./container/Homepage/Homepage";

function App() {
  return <>
    <Navbar/>
    <Homepage/>
  </>;
}

export { App };

import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./container/Homepage/Homepage";
import Services from "./container/Services/Services";
import Welcome from "./container/Welcome/Welcome";
import Menu from "./container/Menu/Menu";
import Cart from "./container/Cart/Cart";

function App() {
  return (
    <>
      <Navbar onHomePage={true} />
      <Homepage />
      <Services />
      <Welcome />
      <Menu />
      <Cart />

      <Footer />
    </>
  );
}

export { App };

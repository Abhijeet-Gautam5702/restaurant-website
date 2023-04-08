import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./container/Homepage/Homepage";
import Services from "./container/Services/Services";
import Welcome from "./container/Welcome/Welcome";
import Menu from "./container/Menu/Menu";
import Cart from "./container/Cart/Cart";

import ScrollToTop from "./HOC/ScrollToTop";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar onHomePage={true} />
                <Homepage />
                <Services />
                <Welcome />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Navbar onHomePage={false} showAbout={false} />
                <Menu />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar onHomePage={false} showAbout={false} />
                <Cart />
              </>
            }
          />
      </Routes>

      {/* <Cart /> */}

      <Footer />
    </BrowserRouter>
  );
}

export { App };

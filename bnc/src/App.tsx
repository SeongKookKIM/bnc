import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Home = lazy(() => import("./Pages/Home"));

const About = lazy(() => import("./Pages/About"));

const Service = lazy(() => import("./Pages/Service"));

const Inqury = lazy(() => import("./Pages/Inqury"));

const Map = lazy(() => import("./Pages/Map"));

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/inqury" element={<Inqury />}></Route>
          <Route path="/location" element={<Map />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

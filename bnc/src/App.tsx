import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Inqury from "./Pages/Inqury";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/inqury" element={<Inqury />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

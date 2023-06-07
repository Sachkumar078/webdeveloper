import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import List from "./Component/List";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="App">
      <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;

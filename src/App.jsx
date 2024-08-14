// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CourseGrid />
      <Footer />
    </div>
  );
}

export default App;

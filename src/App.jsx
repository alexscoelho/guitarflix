// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseGrid from "./components/CourseGrid";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CourseGrid />
              </>
            }
          />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

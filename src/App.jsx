// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseGrid from "./components/CourseGrid";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import "./App.css";
import Dashboard from "./components/Dashboard";

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
          <Route
            path="/dashboard"
            element={<Dashboard coursesInProgress={coursesInProgress} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const coursesInProgress = [
  {
    id: 1,
    title: "Beginner Guitar Mastery",
    imageUrl: "path_to_image_1.jpg",
    progress: 50,
  },
  {
    id: 2,
    title: "Intermediate Guitar Techniques",
    imageUrl: "path_to_image_2.jpg",
    progress: 75,
  },
  // Add more courses...
];

export default App;

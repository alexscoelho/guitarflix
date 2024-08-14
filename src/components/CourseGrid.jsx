// CourseGrid.js
import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "../courseData";
import "./CourseGrid.css";

function CourseGrid() {
  return (
    <div className="course-grid">
      <div className="container">
        <h2>Popular Courses</h2>
        <div className="grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseGrid;

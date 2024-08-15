// CourseGrid.js
import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { courses } from "../courseData";
import "./CourseGrid.css";

function CourseGrid() {
  return (
    <div className="course-grid" id="courses">
      <div className="container">
        <h2>Popular Courses</h2>
        <div className="grid">
          {courses.map((course) => (
            <Link
              to={`/course/${course.id}`}
              key={course.id}
              className="course-link"
            >
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseGrid;

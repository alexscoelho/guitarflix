// CourseCard.js
import React from "react";
import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.imageUrl} alt={course.title} />
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.instructor}</p>
        <p>{course.level}</p>
        <p className="price">${course.price}</p>
      </div>
    </div>
  );
}

export default CourseCard;

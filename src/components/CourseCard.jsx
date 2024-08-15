// CourseCard.js
import React from "react";
import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-card-inner">
        <img src={course.imageUrl} alt={course.title} />
        <div className="course-info">
          <h3>{course.title}</h3>
          <p>{course.instructor}</p>
          <p className="price">${course.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

// CourseDetails.js
import React from "react";
import "./CourseDetails.css";

function CourseDetails({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="course-details-overlay">
      <div className="course-details">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="course-details-content">
          <div className="course-details-image">
            <img src={course.imageUrl} alt={course.title} />
          </div>
          <div className="course-details-info">
            <h2>{course.title}</h2>
            <p className="instructor">Instructor: {course.instructor}</p>
            <p className="level">Level: {course.level}</p>
            <p className="duration">Duration: {course.duration}</p>
            <p className="price">${course.price}</p>
            <p className="description">{course.description}</p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;

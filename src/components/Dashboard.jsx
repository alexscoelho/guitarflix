import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard({ coursesInProgress }) {
  return (
    <div className="dashboard">
      <h2>My Dashboard</h2>
      <div className="course-grid">
        {coursesInProgress.length > 0 ? (
          coursesInProgress.map((course) => (
            <div key={course.id} className="course-card">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="course-image"
              />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>Progress: {course.progress}%</p>
                <Link to={`/courses/${course.id}`} className="continue-button">
                  Continue Course
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>You have no courses in progress.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

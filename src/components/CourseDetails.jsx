import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../courseData";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <div>Course not found</div>;

  return (
    <div className="course-details">
      <div className="container">
        {/* Introduction Video */}
        <div className="video-intro">
          <video controls>
            <source src={course.introVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Two-Column Layout */}
        <div className="content-grid">
          <div className="main-content">
            <div className="course-description">
              <h3>About this course</h3>
              <p>{course.description}</p>
            </div>
            <div className="course-lessons">
              <h3>Lessons</h3>
              <div className="lessons-list">
                {course.lessons.map((lesson) => (
                  <div key={lesson.id} className="lesson-item">
                    <h4>{lesson.title}</h4>
                    <p>{lesson.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="lesson-materials">
              <h4>Class Materials</h4>
              <a href="path_to_class_material" className="material-card">
                <img
                  src="path_to_pdf_icon"
                  alt="PDF icon"
                  className="material-icon"
                />
                <span className="material-title">Hendrix CAGED</span>
              </a>

              <h4>Lesson Materials</h4>
              <a href="path_to_lesson_material" className="material-card">
                <img
                  src="path_to_pdf_icon"
                  alt="PDF icon"
                  className="material-icon"
                />
                <span className="material-title">Day 1. E shape</span>
              </a>
            </div>
            <div className="progress">
              <h4>Progress</h4>
              <p>3 of 10 Lessons Completed</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-filled"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/#courses" className="back-link">
          ← Back to Courses
        </Link>
      </div>
    </div>
  );
}

export default CourseDetails;

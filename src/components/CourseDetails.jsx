import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../courseData";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  const [selectedLesson, setSelectedLesson] = useState(null);

  if (!course) return <div>Course not found</div>;

  const handleLessonClick = (lessonId) => {
    setSelectedLesson(lessonId);
  };

  const currentLesson = selectedLesson
    ? course.lessons.find((lesson) => lesson.id === selectedLesson)
    : null;

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
                  <div
                    key={lesson.id}
                    className={`lesson-item ${
                      selectedLesson === lesson.id ? "selected" : ""
                    }`}
                    onClick={() => handleLessonClick(lesson.id)}
                  >
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

        {/* Detailed Lesson View */}
        {currentLesson && (
          <div className="lesson-details">
            <h3>{currentLesson.title}</h3>
            <div className="lesson-video">
              <video controls>
                <source src={currentLesson.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="lesson-tab">
              <h4>Tablature</h4>
              <embed
                src={currentLesson.tabUrl}
                type="application/pdf"
                width="100%"
                height="500px"
              />
            </div>
            <div className="audio-section">
              <SoundCloudPlayer />
            </div>

            <div className="lesson-explanation">
              <h4>Explanation</h4>
              <p>{currentLesson.explanation}</p>
            </div>
          </div>
        )}

        <Link to="/#courses" className="back-link">
          ← Back to Courses
        </Link>
      </div>
    </div>
  );
}

function SoundCloudPlayer() {
  const linkStyle = {
    color: "#cccccc",
    textDecoration: "none",
  };

  const textStyle = {
    fontSize: "10px",
    color: "#cccccc",
    lineBreak: "anywhere",
    wordBreak: "normal",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontFamily:
      "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
    fontWeight: 100,
  };

  return (
    <div>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1482223330&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div style={textStyle}>
        <a
          href="https://soundcloud.com/alexson-coelho-de-sousa"
          title="Alexson Coelho De Sousa"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Alexson Coelho De Sousa
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/alexson-coelho-de-sousa/untitled"
          title="Strat"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Strat
        </a>
      </div>
    </div>
  );
}

export default CourseDetails;

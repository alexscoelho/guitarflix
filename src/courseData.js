import courseImage1 from "./images/course-image-1.jpeg";
import courseImage2 from "./images/course-image-2.jpeg";
import courseImage3 from "./images/course-image-3.jpeg";

// courseData.js
export const courses = [
  {
    id: 1,
    title: "Beginner Guitar Mastery",
    instructor: "John Doe",
    level: "Beginner",
    duration: "4 weeks",
    price: 49.99,
    imageUrl: courseImage1,
    description:
      "Master the basics of guitar playing with this comprehensive course for beginners.",
    lessons: [
      {
        id: 1,
        title: "Getting Started with Your Guitar",
        duration: "15:30",
        videoUrl: "path_to_video_1.mp4",
        tabUrl: "path_to_tab_1.pdf",
        explanation:
          "In this lesson, we'll cover how to hold your guitar, basic finger positions, and your first chord.",
      },
      {
        id: 2,
        title: "Your First Chords",
        duration: "20:45",
        videoUrl: "path_to_video_2.mp4",
        tabUrl: "path_to_tab_2.pdf",
        explanation:
          "Learn three essential chords that will allow you to play hundreds of songs.",
      },
      // Add more lessons...
    ],
  },
  // Add more courses...
];

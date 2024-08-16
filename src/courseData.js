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
        audioUrl:
          "https://soundcloud.com/alexson-coelho-de-sousa/untitled?si=d82ae0a743c64f3ba1c9284f3c310754&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        tabUrl:
          "https://www.learntoplayitright.com/wp-content/uploads/2012/10/Blank-Guitar-Tab-Sheet.pdf",
        explanation:
          "In this lesson, we'll cover how to hold your guitar, basic finger positions, and your first chord.",
      },
      {
        id: 2,
        title: "Your First Chords",
        duration: "20:45",
        videoUrl: "path_to_video_2.mp4",
        audioUrl:
          "https://soundcloud.com/alexson-coelho-de-sousa/untitled?si=d82ae0a743c64f3ba1c9284f3c310754&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        tabUrl:
          "https://www.learntoplayitright.com/wp-content/uploads/2012/10/Blank-Guitar-Tab-Sheet.pdf",
        explanation:
          "Learn three essential chords that will allow you to play hundreds of songs.",
      },
      // Add more lessons...
    ],
  },
  // Add more courses...
];

import courseImage1 from "./images/course-image-1.jpeg";
import courseImage2 from "./images/course-image-2.jpeg";
import courseImage3 from "./images/course-image-3.jpeg";

export const courses = [
  {
    id: 1,
    title: "Beginner Guitar",
    instructor: "John Doe",
    level: "Beginner",
    duration: "4 weeks",
    price: 49.99,
    imageUrl: courseImage1,
    description:
      "Start your guitar journey with this comprehensive course for beginners. Learn basic chords, strumming patterns, and simple songs.",
  },
  {
    id: 2,
    title: "Intermediate Guitar Techniques",
    instructor: "Jane Smith",
    level: "Intermediate",
    duration: "6 weeks",
    price: 69.99,
    imageUrl: courseImage2,
    description:
      "Take your guitar skills to the next level with advanced techniques, scales, and improvisation methods.",
  },
  {
    id: 3,
    title: "Advanced Guitar Mastery",
    instructor: "Mike Johnson",
    level: "Advanced",
    duration: "8 weeks",
    price: 89.99,
    imageUrl: courseImage3,
    description:
      "Perfect your guitar playing with this advanced course covering complex techniques, music theory, and performance skills.",
  },
];

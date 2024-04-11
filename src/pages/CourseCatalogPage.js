import React, { useState } from "react";

// Dummy course data
const dummyCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description:
      "Learn the basics of web development with HTML, CSS, and JavaScript.",
    category: "Technology",
    difficulty: "Beginner",
    popularity: 4.5,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    description:
      "Explore the core concepts of digital marketing and strategies for success.",
    category: "Business",
    difficulty: "Intermediate",
    popularity: 4.2,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Python Programming for Beginners",
    description: "Get started with Python programming language from scratch.",
    category: "Technology",
    difficulty: "Beginner",
    popularity: 4.7,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Financial Accounting Basics",
    description: "Learn the fundamental principles of financial accounting.",
    category: "Business",
    difficulty: "Intermediate",
    popularity: 4.0,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Data Structures and Algorithms in Java",
    description:
      "Master data structures and algorithms using the Java programming language.",
    category: "Technology",
    difficulty: "Intermediate",
    popularity: 4.6,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Introduction to Psychology",
    description:
      "Explore the fascinating world of psychology and human behavior.",
    category: "Social Sciences",
    difficulty: "Beginner",
    popularity: 4.3,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Graphic Design Fundamentals",
    description:
      "Learn the basics of graphic design and create stunning visual content.",
    category: "Arts & Design",
    difficulty: "Beginner",
    popularity: 4.1,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Introduction to Machine Learning",
    description:
      "Discover the principles of machine learning and its applications.",
    category: "Technology",
    difficulty: "Intermediate",
    popularity: 4.8,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Marketing Strategy Essentials",
    description:
      "Develop effective marketing strategies to drive business growth.",
    category: "Business",
    difficulty: "Intermediate",
    popularity: 4.4,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Spanish Language Basics",
    description:
      "Learn the basics of the Spanish language including grammar and vocabulary.",
    category: "Language",
    difficulty: "Beginner",
    popularity: 4.2,
    thumbnail: "https://via.placeholder.com/150",
  },
  // Add more courses as needed
];

const CourseCatalogPage = () => {
  const [courses, setCourses] = useState(dummyCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filter courses based on search query, category, and difficulty
  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || course.category === selectedCategory) &&
      (selectedDifficulty === "" || course.difficulty === selectedDifficulty)
    );
  });

  // Sort courses based on popularity
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "popularity") {
      // Sort from low to high popularity
      return a.popularity - b.popularity;
    } else if (sortBy === "popularity_high_to_low") {
      // Sort from high to low popularity
      return b.popularity - a.popularity;
    } else {
      return 0;
    }
  }); // Sort B

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filtering Options */}
      <div className="flex mb-4">
        {/* Category Filter */}
        <select
          className="px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          {/* Add more options as needed */}
        </select>

        {/* Difficulty Filter */}
        <select
          className="px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="">All Difficulty Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        {/* Sort By */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="popularity">Popularity (Low to High)</option>
          <option value="popularity_high_to_low">
            Popularity (High to Low)
          </option>
        </select>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {course.category} | {course.difficulty}
                </p>
                <p className="text-sm text-gray-500">
                  Popularity: {course.popularity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalogPage;

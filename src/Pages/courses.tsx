import React, { useEffect, useState } from "react";
import AuthService from "../Services/Auth.services";
import Card from "../Components/coursesCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Breadcrumbs from "../Components/ui/breadcrumbs";
import QuizPopupChapter4 from "../Components/QuizPopup";

interface Course {
  _id: string;
  niche: string;
  image: string;
  author: string;
  title: string;
  time_to_finish: string;
  number_of_students: number;
  level: string;
  lessons: number;
  price: string;
}

const Courses: React.FC = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Check if the survey token exists in localStorage
    const surveyCompleted = localStorage.getItem("surveyCompleted");
    if (!surveyCompleted) {
      setShowSurvey(true);
    }
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await AuthService.getCourses(); // Fetch courses
        // Filter out items that do not have course details (e.g., missing title)
        const filteredCourses = response.data.filter(
          (item: any) => item.title !== undefined
        );
        setCourses(filteredCourses);
        console.log("Courses fetched:", filteredCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleSurveyComplete = () => {
    localStorage.setItem("surveyCompleted", "true");
    setShowSurvey(false);
  };

  const handleViewMore = () => {
    alert("View more clicked!");
  };

  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 px-4 md:px-20 lg:px-80">
        <h3 className="font-bold text-2xl md:text-3xl text-center md:text-left">
          All Courses
        </h3>
        <div className="flex mt-4 md:mt-0 items-center border-b-2 border-gray-300 w-full md:w-auto">
          <input
            type="search"
            name="Search"
            id="Search"
            className="flex-grow focus:outline-none pl-4 text-sm text-gray-600"
            placeholder="Search"
          />
          <div className="flex space-x-2">
            <img src="/svg/search.svg" alt="search icon" />
            <img src="/svg/box.svg" alt="box icon" />
            <img src="/svg/filter.svg" alt="filter icon" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-10 px-4 md:px-20 lg:px-80">
        {courses.map((course) => (
          <Card
            key={course._id}
            category={course.niche}
            image={course.image}
            author={course.author}
            title={course.title}
            duration={course.time_to_finish}
            students={course.number_of_students}
            level={course.level}
            lessons={course.lessons}
            price={course.price}
            onClick={handleViewMore}
          />
        ))}
      </div>
      <Footer />

      {/* Survey Modal: Display only if the survey hasn't been completed */}
      {showSurvey && (
        <QuizPopupChapter4
          onClose={() => setShowSurvey(false)}
          onComplete={handleSurveyComplete}
        />
      )}
    </div>
  );
};

export default Courses;

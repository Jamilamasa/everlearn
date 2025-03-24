import React, { useEffect, useState } from "react";
import Card from "@/Components/coursesCard";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Breadcrumbs from "@/Components/ui/breadcrumbs";
import QuizPopupChapter4 from "@/Components/QuizPopup";

const Courses: React.FC = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    // Check if the survey token exists in localStorage
    const surveyCompleted = localStorage.getItem("surveyCompleted");
    if (!surveyCompleted) {
      setShowSurvey(true);
    }
  }, []);

  // Callback to be called once the survey is complete
  const handleSurveyComplete = () => {
    // Optionally, send the answers to the backend here
    // For now, we simply store a token to mark the survey as complete.
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
        <h3 className="font-bold text-2xl md:text-3xl text-center md:text-left">All Courses</h3>
        <div className="flex mt-4 md:mt-0 items-center border-b-2 border-gray-300 w-full md:w-auto">
          <input
            type="search"
            name="Search"
            id="Search"
            className="flex-grow focus:outline-none pl-4 text-sm text-gray-600"
            placeholder="Search"
          />
          <div className="flex space-x-2">
            <div><img src="/svg/search.svg" alt="search icon" /></div>
            <div><img src="/svg/box.svg" alt="box icon" /></div>
            <div><img src="/svg/filter.svg" alt="filter icon" /></div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-10 px-4 md:px-20 lg:px-80">
        <Card
          category="Photography"
          image="/svg/photo-four.svg"
          author="Determined-Poitras"
          title="Create An LMS Website With LearnPress"
          duration="2 Weeks"
          students={156}
          level="All levels"
          lessons={20}
          price="$29.0"
          onClick={handleViewMore}
        />
        <Card
          category="Photography"
          image="/svg/photo-two.svg"
          author="Determined-Poitras"
          title="Create An LMS Website With LearnPress"
          duration="2 Weeks"
          students={156}
          level="All levels"
          lessons={20}
          price="$29.0"
          onClick={handleViewMore}
        />
        <Card
          category="Photography"
          image="/svg/photo-three.svg"
          author="Determined-Poitras"
          title="Create An LMS Website With LearnPress"
          duration="2 Weeks"
          students={156}
          level="All levels"
          lessons={20}
          price="$29.0"
          onClick={handleViewMore}
        />
      </div>
      <Footer />

      {/* Survey Modal: Display only if the survey hasn't been completed */}
      {showSurvey && (
        <QuizPopupChapter4 onClose={() => setShowSurvey(false)} onComplete={handleSurveyComplete} />
      )}
    </div>
  );
};

export default Courses;

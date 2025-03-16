import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// New questions for determining user study preferences and expertise
const questions = [
  {
    question: "What is your current educational or professional level?",
    options: [
      "High School",
      "Undergraduate",
      "Postgraduate",
      "Professional/Industry Expert",
    ],
    correctAnswer: null,
  },
  {
    question: "Which subject areas are you most interested in studying?",
    options: [
      "Computer Science / Technology",
      "Business / Management",
      "Engineering",
      "Arts & Humanities",
      "Health & Medicine",
      "Social Sciences",
    ],
    correctAnswer: null,
  },
  {
    question: "How would you rate your current expertise in your chosen subject area(s)?",
    options: ["Beginner", "Intermediate", "Advanced"],
    correctAnswer: null,
  },
  {
    question: "What type of course content do you prefer?",
    options: [
      "Video lectures",
      "Text-based materials",
      "Interactive exercises/quizzes",
      "Live sessions or webinars",
    ],
    correctAnswer: null,
  },
  {
    question: "How much time per week can you realistically dedicate to studying?",
    options: [
      "Less than 5 hours",
      "5–10 hours",
      "10–20 hours",
      "More than 20 hours",
    ],
    correctAnswer: null,
  },
  {
    question: "What is your preferred course duration?",
    options: [
      "Short courses (less than 4 weeks)",
      "Medium-length courses (4–8 weeks)",
      "Long courses (more than 8 weeks)",
    ],
    correctAnswer: null,
  },
  {
    question: "What learning pace suits you best?",
    options: ["Self-paced", "Instructor-led", "Blended (mix of both)"],
    correctAnswer: null,
  },
  {
    question: "How important is hands-on practice (projects, labs) to you?",
    options: ["Very important", "Somewhat important", "Not important"],
    correctAnswer: null,
  },
  {
    question: "What is your primary motivation for taking a course?",
    options: [
      "Career advancement",
      "Personal interest",
      "Skill development",
      "Obtaining a certification",
    ],
    correctAnswer: null,
  },
  {
    question: "Which learning style best describes you?",
    options: [
      "Visual (images, videos, diagrams)",
      "Auditory (lectures, podcasts)",
      "Kinesthetic (hands-on activities)",
      "Reading/Writing (text and notes)",
    ],
    correctAnswer: null,
  },
];

const questionVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

interface SurveyProps {
  onClose: () => void;
  onComplete: (answers: (number | null)[]) => void;
}

const Survey = ({ onClose, onComplete }: SurveyProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = (skip = false) => {
    // Save the answer (or null if skipped)
    setAnswers((prev) => [...prev, skip ? null : Number(selectedOption)]);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  // When the survey is complete, simply display a thank you message and pass answers to the backend
  if (showSummary) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 overflow-y-auto max-h-full">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Survey Complete</h2>
            <p className="text-lg mb-6">
              Thank you for your responses. Your answers have been recorded.
            </p>
            <button
              onClick={() => {
                onComplete(answers);
                onClose();
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentData = questions[currentQuestion];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="mb-4">{currentData.question}</p>
            <form>
              {currentData.options.map((option, index) => (
                <div key={index} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="question"
                      value={index}
                      checked={selectedOption === String(index)}
                      onChange={handleOptionChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </div>
              ))}
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => handleNext(true)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={() => handleNext(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  disabled={selectedOption === null}
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Survey;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthServices from "@/Services/Auth.services";

// New questions for determining user study preferences and expertise
const questions = [
  {
    id: "skillLevel",
    question: "What is your current skill level in programming?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: "goal",
    question: "What is your main goal for learning programming?",
    options: [
      "Build websites",
      "Create mobile apps",
      "Automate tasks",
      "Get a tech job",
      "Just exploring / general interest",
    ],
  },
  {
    id: "interest",
    question: "Which type of programming are you most interested in?",
    options: [
      "Web Development",
      "Mobile Development",
      "Data Science & AI",
      "Game Development",
      "System Programming",
    ],
  },
  {
    id: "timeCommitment",
    question: "How much time can you commit per week?",
    options: ["1–2 hours", "3–5 hours", "6–10 hours", "10+ hours"],
  },
  {
    id: "learningFormat",
    question: "Preferred learning format?",
    options: [
      "Video Lessons",
      "Interactive Coding",
      "Text-based Lessons",
      "Project-based Learning",
    ],
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
              onClick={async () => {
                const formattedAnswers: Record<string, string> = {};

                answers.forEach((value, index) => {
                  if (value !== null) {
                    const questionId = questions[index].id;
                    const answer = questions[index].options[value];
                    formattedAnswers[questionId] = answer;
                  }
                });

                try {
                  const email = localStorage.getItem("email") || ""; 
                  const otp = localStorage.getItem("otp") || "";
                  await AuthServices.recommend({ otp, email, ...formattedAnswers });
                } catch (error) {
                  console.error("Failed to send survey data:", error);
                }

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

import React, { useState } from "react";

const RebuildedQuestion = ({ modifiedData }) => {
  const allQuestions = modifiedData.flatMap((item) => item.questions || []);
  const examInfo = modifiedData[0];

  // State to track selected answers and feedback
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionClick = (questionId, selectedOption, correctAnswer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: {
        selected: selectedOption,
        isCorrect: selectedOption === correctAnswer,
      },
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Exam Info */}
      <div className="bg-blue-50 p-4 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-2">
          {examInfo.institution_name}
        </h1>
        <p className="text-center text-2xl font-semibold">{examInfo.exam_name}</p>
        <p className="text-center text-xl font-semibold">{examInfo.subject}</p>
        <p className="text-center text-xl font-semibold">{examInfo.paper}</p>
        <p className="text-center text-xl font-semibold">{examInfo.class_name}</p>
        <p className="text-center text-lg mt-2">
          <strong>Duration:</strong> {examInfo.exam_duration}
        </p>

        {examInfo.global_instructions?.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Instructions for candidate:</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {examInfo.global_instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Questions */}
      {allQuestions.map((question, index) => (
        <div key={question.id} className="p-4 border rounded-lg bg-white shadow">
          {question.individual_instructions && (
            <p className="text-sm text-gray-700 italic mb-3">
              {question.individual_instructions}
            </p>
          )}
          <h3 className="text-lg font-semibold mb-2">
            {question.id}. {question.main_question_text}
          </h3>

          {/* Diagram */}
          {question.diagram_info?.map((diagram, i) => (
            <div key={i} className="my-4">
              {diagram.diagram_img_url && (
                <img
                  src={diagram.diagram_img_url}
                  alt="Question diagram"
                  className="max-w-sm border"
                />
              )}
            </div>
          ))}

          {/* Question Parts */}
          {question.parts.map((part, idx) => (
            <div key={idx} className="mt-4">
              {part?.question_text && (
                <h4 className="mb-2 font-medium">
                  {part.part_id}. {part.question_text}
                </h4>
              )}

              <div className="space-y-2">
                {part.options.map((opt, i) => {
                  const userAnswer = selectedAnswers[question.id]?.selected;
                  const isCorrect = selectedAnswers[question.id]?.isCorrect;

                  const isSelected = userAnswer === opt;
                  const isAnswerChecked = userAnswer !== undefined;

                  return (
                    <button
                      key={i}
                      onClick={() =>
                        handleOptionClick(question.id, opt, part.correct_answer)
                      }
                      className={`block w-full text-left px-4 py-2 border rounded transition 
                        ${
                          isAnswerChecked && isSelected
                            ? isCorrect
                              ? "bg-green-100 border-green-500 text-green-700"
                              : "bg-red-100 border-red-500 text-red-700"
                            : "hover:bg-gray-100"
                        }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Feedback message */}
              {selectedAnswers[question.id] && (
                <p
                  className={`mt-2 text-sm font-semibold ${
                    selectedAnswers[question.id].isCorrect
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedAnswers[question.id].isCorrect
                    ? "Correct!"
                    : "Incorrect. Try again."}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RebuildedQuestion;

"use client";
import { ReactElement } from "react";
import { Bookmark } from "lucide-react";
import wordSets from "../configs/words";
import { Difficulty, Screen } from "../page";

type QuizProps = {
  screen: Screen;
  currentWordIndex: number;
  difficulty: Difficulty;
  timeLeft: number;
  isBookmarked: boolean;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  handleAnswerSelect: (answer: string) => void;
  setIsBookmarked: (value: boolean) => void;
};

const Quiz = ({
  screen,
  currentWordIndex,
  difficulty,
  timeLeft,
  isBookmarked,
  selectedAnswer,
  isCorrect,
  handleAnswerSelect,
  setIsBookmarked,
}: QuizProps): ReactElement | null => {
  if (screen !== "quiz") return null;

  const currentWord = wordSets?.[difficulty]?.[currentWordIndex];

  if (!currentWord) {
    return <div>문제를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <>
      <div className="flex-1 flex flex-col px-4 pt-2">
        {/* Progress bar */}
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{
              width: `${
                ((currentWordIndex + 1) / wordSets[difficulty].length) * 100
              }%`,
            }}
          ></div>
        </div>

        {/* Bookmark button */}
        <button
          className={`self-end mt-4 ${
            isBookmarked ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <Bookmark size={24} />
        </button>

        {/* Word display and time bar */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm border-2 border-gray-200 flex flex-col items-center justify-center"
            style={{ height: "200px" }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              {currentWord.korean}
            </h2>
            <div className="w-full h-1 bg-gray-200 rounded-full">
              <div
                className="h-full bg-red-500 rounded-full transition-all duration-100"
                style={{ width: `${(timeLeft / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Answer options */}
          <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
            {currentWord.options.map((option) => (
              <button
                key={option}
                className={`py-3 px-6 rounded-full text-center transition-colors duration-200 border-2 ${
                  selectedAnswer === null
                    ? "bg-white text-gray-800 border-gray-300"
                    : selectedAnswer === option
                    ? isCorrect
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-red-500 text-white border-red-500"
                    : option === currentWord.english
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-200 text-gray-500 border-gray-200"
                } ${timeLeft <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={timeLeft <= 0 || selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;

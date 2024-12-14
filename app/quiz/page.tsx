"use client";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";
import words from "../src/configs/words";
import { Bookmark } from "lucide-react";
import { Wrapper } from "@yeonpm/react";

export type Difficulty = -1 | 0 | 1 | 2 | 3 | 4 | 5;
export type Screen = "home" | "quiz" | "results";

const Page = (): ReactElement => {
  const [difficulty, setDifficulty] = useState<Difficulty>(1);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const seconds = 8000;
  const [timeLeft, setTimeLeft] = useState(seconds / 1000);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const router = useRouter();
  const [currentWord, setCurrentWord] = useState(words[1][0]);

  useEffect(() => {
    setCurrentWord(words[difficulty][currentWordIndex]);
  }, [difficulty, currentWordIndex]);

  useEffect(() => {
    if (typeof isCorrect === "boolean") return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 0.1), 100);
      return () => clearTimeout(timer);
    } else if (selectedAnswer === null) {
      setTimeout(() => goToNextWord(), 2000);
    }
  }, [timeLeft, selectedAnswer, isCorrect]);

  const goToNextWord = () => {
    if (currentWordIndex + 1 < words[difficulty]?.length) {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(seconds / 1000);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const handleAnswerSelect = async (answer: string) => {
    if (selectedAnswer !== null || timeLeft <= 0) return;
    const correct = answer === words[difficulty][currentWordIndex].english;
    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentWordIndex + 1 >= words[difficulty]?.length) {
      const finalCorrectAnswers = correct ? correctAnswers + 1 : correctAnswers;
      setTimeout(() => {
        router.push(
          `/result?total=${words[difficulty].length}&correct=${finalCorrectAnswers}`
        );
      }, 2000);
    } else {
      setTimeout(goToNextWord, 2000);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <Wrapper maxHeight={`calc(100vh - 100)`} h={"100%"} w="100%">
        <div className="bg-gray-200 h-2">
          <div
            className="bg-blue-500 h-full transition-all duration-300"
            style={{
              width: `${
                ((currentWordIndex + 1) / words[difficulty]?.length) * 100
              }%`,
            }}
          ></div>
        </div>

        {/* Bookmark button */}
        <Wrapper flex>
          <Wrapper
            mr0mlAuto
            mr={10}
            bg="#00000022"
            borderRadius={"50%"}
            size={40}
            ac
            jc
            my={10}
          >
            <button
              className={`${
                isBookmarked ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark size={24} />
            </button>
          </Wrapper>
        </Wrapper>

        <Wrapper px={24}>
          {/* Word display and time bar */}
          <div className="w-full flex-1 flex flex-col items-center justify-center space-y-8">
            <div
              className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm border-2 border-gray-200 flex flex-col items-center justify-center"
              style={{ height: "200px" }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">
                {currentWord.korean}
              </h2>
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div
                  className={`h-full bg-red-500 rounded-full transition-all duration-${
                    seconds / 10
                  }`}
                  style={{
                    width: `${(timeLeft / (seconds / 1000)) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Answer options */}
            <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
              {currentWord.options.map((option) => (
                <button
                  key={option}
                  className={`py-3 px-6 rounded-full text-center transition-colors duration-${
                    seconds / 10
                  } border-2 ${
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
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Page;

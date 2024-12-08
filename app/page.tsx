"use client";

import PWAInstallPrompt from "./component/feature/PWAInstallPrompt";
import { useState, useEffect } from "react";
import wordSets from "./configs/words";
import Header from "./component/Header";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Results from "./component/Result";

export type Screen = "home" | "quiz" | "results";
export type Difficulty = -1 | 0 | 1 | 2 | 3 | 4 | 5; // 0은 홈화면과 같이 난이도가 필요없는 상태 -1은 북마크 단어!

export default function WordQuiz() {
  const [screen, setScreen] = useState<Screen>("home");
  // const [screen, setScreen] = useState<Screen>("results");
  const [difficulty, setDifficulty] = useState<Difficulty>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(2);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (screen === "home") {
      setDifficulty(0);
    }
  }, [screen]);

  useEffect(() => {
    if (screen === "quiz" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 0.1), 100);
      return () => clearTimeout(timer);
    } else if (screen === "quiz" && selectedAnswer === null) {
      setTimeout(() => goToNextWord(), 1000);
    }
  }, [timeLeft, selectedAnswer, screen]);

  const goToNextWord = () => {
    if (currentWordIndex + 1 < wordSets[difficulty]?.length) {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(2);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setScreen("results");
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer !== null || timeLeft <= 0) return;
    const correct = answer === wordSets[difficulty][currentWordIndex].english;
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    if (correct) setCorrectAnswers((prev) => prev + 1);
    setTimeout(goToNextWord, 1000);
  };

  const startQuiz = (selectedDifficulty: Difficulty) => {
    setScreen("quiz");
    setDifficulty(selectedDifficulty);
    setCurrentWordIndex(0);
    setTimeLeft(2);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectAnswers(0);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header difficulty={difficulty} />
      <Home screen={screen} startQuiz={startQuiz} />
      <Quiz
        screen={screen}
        currentWordIndex={currentWordIndex}
        difficulty={difficulty}
        timeLeft={timeLeft}
        isBookmarked={isBookmarked}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
        handleAnswerSelect={handleAnswerSelect}
        setIsBookmarked={setIsBookmarked}
      />
      <Results
        screen={screen}
        difficulty={difficulty}
        correctAnswers={correctAnswers}
        setScreen={setScreen}
        startQuiz={startQuiz}
      />
      <PWAInstallPrompt />
    </div>
  );
}

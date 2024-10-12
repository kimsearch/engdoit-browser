"use client";
import { ReactElement } from "react";
import { Difficulty, Screen } from "../page";

const Home = ({
  screen,
  startQuiz,
}: {
  screen: Screen;
  startQuiz: (selectedDifficulty: Difficulty) => void;
}): ReactElement => {
  return screen === "home" ? (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">영단어 학습</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {([1, 2, 3, 4, 5] as Difficulty[]).map((level) => (
          <button
            key={level}
            className="py-3 px-6 bg-white rounded-full text-center border-2 border-gray-300 hover:bg-gray-50"
            onClick={() => startQuiz(level)}
          >
            난이도 {level}
          </button>
        ))}
        <button
          className="py-3 px-6 bg-white rounded-full text-center border-2 border-gray-300 hover:bg-gray-50 col-span-2"
          onClick={() => startQuiz(-1)}
        >
          북마크 단어
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Home;

import { ReactElement } from "react";
import { RefreshCw, Home as HomeIcon } from "lucide-react";
import wordSets from "../configs/words";
import { Difficulty, Screen } from "../page";

type ResultsProps = {
  screen: Screen;
  difficulty: Difficulty;
  correctAnswers: number;
  setScreen: (screen: Screen) => void;
  startQuiz: (selectedDifficulty: Difficulty) => void;
};

const Results = ({
  screen,
  difficulty,
  correctAnswers,
  setScreen,
  startQuiz,
}: ResultsProps): ReactElement => {
  const totalQuestions = wordSets?.[difficulty]?.length || 0;

  return screen === "results" ? (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">학습 결과</h2>
      <p className="text-xl mb-8">
        총 {totalQuestions}문제 중 {correctAnswers}문제 정답
      </p>
      <div className="flex gap-4">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-full flex items-center"
          onClick={() => startQuiz(difficulty)}
        >
          <RefreshCw size={20} className="mr-2" />
          다시보기
        </button>
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-full flex items-center"
          onClick={() => setScreen("home")}
        >
          <HomeIcon size={20} className="mr-2" />
          홈으로
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Results;

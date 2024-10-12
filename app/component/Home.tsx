"use client";
import { ReactElement } from "react";
import { Difficulty, Screen } from "../page";
import { Star } from "lucide-react";
import { FaBookmark } from "react-icons/fa";

const Home = ({
  screen,
  startQuiz,
}: {
  screen: Screen;
  startQuiz: (selectedDifficulty: Difficulty) => void;
}): ReactElement => {
  return screen === "home" ? (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-2 gap-4 w-full" style={{ maxWidth: 320 }}>
        {([1, 2, 3, 4, 5, -1] as Difficulty[]).map((level) => (
          <StageButton
            key={level}
            label={level === -1 ? "북마크" : `난이도 ${level}`}
            icon={
              level === -1 ? (
                <div className="flex justify-center">
                  <FaBookmark
                    color="rgb(237 140 140)"
                    style={{ width: 20, height: 20 }}
                  />
                </div>
              ) : (
                <div className="flex justify-center">
                  <Star
                    className="w-6 h-6 text-yellow-400 fill-current "
                    style={{
                      width: 24,
                      color: "#ffb13c",
                    }}
                  />
                </div>
              )
            }
            onClick={() => startQuiz(level)}
          />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Home;

const StageButton = ({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: ReactElement;
  onClick;
}) => (
  <button
    className="py-3 px-6 text-center hover:bg-gray-50"
    style={{
      height: 170,
      borderRadius: 10,
      background: "linear-gradient(-42deg, rgb(222 222 222), rgb(247 247 247))",
      boxShadow: "inset -1px -1px 4px rgba(0,0,0,0.25)",
    }}
    onClick={onClick}
  >
    <div className="flex justify-center">{icon}</div>
    <p className="mt-8" style={{ fontFamily: "BMJUA" }}>
      {label}
    </p>
  </button>
);

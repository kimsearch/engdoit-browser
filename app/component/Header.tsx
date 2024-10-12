"use client";
import { ArrowLeft, Star } from "lucide-react";
import { ReactElement } from "react";
import { Difficulty } from "../page";

const Header = ({ difficulty }: { difficulty: Difficulty }): ReactElement => {
  return (
    <header className="flex justify-center items-center bg-gray-900 text-white p-4">
      <ArrowLeft className="w-6 absolute left-4 h-6" />
      {difficulty == 0 ? (
        <p style={{ fontFamily: "BMJUA", fontSize: 29 }}>stage</p>
      ) : (
        <div style={{ height: 43.5 }} className="flex items-center">
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </div>
      )}
    </header>
  );
};

export default Header;

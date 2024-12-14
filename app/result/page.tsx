/* eslint-disable @next/next/no-img-element */
"use client";
import { Txt, Wrapper } from "@yeonpm/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Result() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const total = searchParams.get("total");
  const correct = searchParams.get("correct");
  const percentage = (Number(correct) / Number(total)) * 100;
  const percentageColor = {
    text: percentage >= 70 ? "#4caf50" : "#f44336",
    bg: percentage >= 70 ? "#c6f0c0" : "#f9d3ce",
  };
  const percentageText = percentage >= 70 ? "GOOD~" : "Umm...";

  return (
    <Wrapper maxHeight={`calc(100vh - 100)`} h={"100%"} w="100%">
      {/* Progress bar */}
      <div className="bg-gray-200 h-2">
        <div className="bg-blue-500 h-full w-full"></div>
      </div>

      {/* Main content */}
      <Wrapper maxHeight={400} h="100%" ac w="100%" px={24}>
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
          <div className="aspect-w-1 aspect-h-1 mb-4">
            <Wrapper w="100%" h="100%" ac jc>
              <img
                src="/icons/engdoit-logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Wrapper>
          </div>
          <Wrapper className="text-center" jc ac column>
            <Txt color="black" mb={12}>
              {correct} / {total}
            </Txt>
            <Wrapper
              color={percentageColor.text}
              size={[120, 50]}
              border={`1px solid ${percentageColor.bg}`}
              borderRadius={50}
              bg={`${percentageColor.bg}44`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-full text-lg font-semibold`}
              >
                {percentageText}
              </span>
            </Wrapper>
          </Wrapper>
        </div>
      </Wrapper>

      <Wrapper className="p-4 space-y-2">
        <Wrapper
          mouseCss
          ac
          jc
          p={12}
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
          onClick={() => router.push("/quiz")}
        >
          틀린 문제 복습하기
        </Wrapper>
        <Wrapper
          mouseCss
          ac
          jc
          p={12}
          className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg"
          onClick={() => router.push("/")}
        >
          나가기
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

"use client";

import { OutlinedInput } from "@mui/material";
import PWAInstallPrompt from "./src/component/feature/PWAInstallPrompt";
import { Txt, Wrapper } from "@yeonpm/react";
import { Mic, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <Wrapper mt={60}>
        <Txt fontVariant={{ fontSize: 35, fw: 800 }}>ENG DO IT</Txt>
      </Wrapper>
      <Wrapper mt={40}>
        <OutlinedInput
          placeholder="단어를 검색해주세요"
          endAdornment={<Mic />}
          inputProps={{ style: { paddingLeft: 12 } }}
          size="small"
          sx={{ backgroundColor: "white" }}
          startAdornment={<Search />}
          color="primary"
        />
      </Wrapper>
      <Wrapper column w={210} maxHeight={370} h="100%" ac jc minHeight={200}>
        <Wrapper between flex w="100%">
          <Button
            onClick={() => {
              // router.push("/word");
            }}
          >
            WORD
          </Button>
          <Button onClick={() => {}}>
            BOOK
            <br />
            MARK
          </Button>
        </Wrapper>
        <Wrapper between flex w="100%" mt={10}>
          <Button
            onClick={() => {
              router.push("/quiz");
            }}
          >
            QUIZ
          </Button>
          <Button onClick={() => {}}>GAME</Button>
        </Wrapper>
      </Wrapper>
      {/* <PWAInstallPrompt /> */}
    </>
  );
}

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Wrapper
      border="2px solid black"
      white
      boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.1)"
      size={[100, 60]}
      borderRadius={"12px !important"}
      role="button"
      ac
      jc
      mouseCss
      onClick={onClick}
    >
      <Txt fv={{ fs: 20, fw: 700, lh: "110%" }}>{children}</Txt>
    </Wrapper>
  );
};

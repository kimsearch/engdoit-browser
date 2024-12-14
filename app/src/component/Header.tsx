"use client";
import { Txt, Wrapper } from "@yeonpm/react";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement } from "react";

const Header = (): ReactElement => {
  const title = "engdoit";
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();

  return (
    <header className="flex justify-center items-center bg-gray-900 text-white p-4">
      {!isHome && (
        <Wrapper onClick={() => router.back()} mouseCss block mt={-20}>
          <ArrowLeft className="w-6 absolute left-4 h-6" />
        </Wrapper>
      )}
      {/* {difficulty == 0 ? (
        <p style={{ fontFamily: "BMJUA", fontSize: 29 }}>stage</p>
      ) : (
        <div style={{ height: 43.5 }} className="flex items-center">
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </div>
      )} */}
      <Txt fontVariant={{ fontSize: 21 }}>{title}</Txt>
    </header>
  );
};

export default Header;

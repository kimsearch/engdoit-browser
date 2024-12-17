"use client";
import { Txt, Wrapper } from "@yeonpm/react";
import { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <Wrapper role="footer" w="100%" h={100} ac jc column gap={10}>
      <Txt fv={{ fs: 12, fw: 400, lh: "110%" }} color="#adadad">
        powered by 2024 engdoit.
      </Txt>
      <Txt fv={{ fs: 12, fw: 400, lh: "110%" }} color="#adadad">
        All right reserved.
      </Txt>
    </Wrapper>
  );
};

export default Footer;

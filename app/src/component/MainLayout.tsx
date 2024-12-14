"use client";
import { Wrapper } from "@yeonpm/react";
import { ReactElement } from "react";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  return (
    <Wrapper fullV jc>
      <Wrapper w={400} ac column overflow="hidden">
        {children}
      </Wrapper>
    </Wrapper>
  );
};

export default MainLayout;

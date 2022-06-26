import React from "react";
import styled from "styled-components";

const HeaderType = ({ children, subtitle }) => {
  return (
    <Container>
      <SubTitle>{subtitle}</SubTitle>
      <HeroText>{children}</HeroText>
    </Container>
  );
};

export default HeaderType;

const Container = styled.div``;

const HeroText = styled.h1`
  margin-bottom: 76px;
  color: #333;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.28;
  word-break: keep-all;
`;

const SubTitle = styled.p`
  color: #00c68e;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

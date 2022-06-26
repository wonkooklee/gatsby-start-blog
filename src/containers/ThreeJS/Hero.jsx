import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <ContentsWrapper>
        <div
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <MessageContainer>
            <SubTitle>GREETINGS</SubTitle>
            <HeroText>
              안녕하세요 저는 이원국입니다
              <br />
              지식과 경험을 전달하기 위해 노력합니다. 🚀
            </HeroText>
          </MessageContainer>
        </div>
      </ContentsWrapper>
      <Viewport />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  position: relative;
`;

const ContentsWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 300;
`;

const MessageContainer = styled.article`
  margin: 0 auto;
  margin-top: 140px;
  width: 1140px;
  padding: 0 15px;
`;

const SubTitle = styled.p`
  color: #00c68e;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const HeroText = styled.h1`
  margin-bottom: 76px;
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.28;
  word-break: keep-all;
`;

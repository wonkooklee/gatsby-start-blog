import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "styled-components";
import Viewport from "./Viewport";
import Animator from "../../components/Event/Animator";
import ScrollDown from "../../components/Lottie/ScrollDown";

const Hero = () => {
  return (
    <Container>
      <ContentsWrapper>
        <Animator motion="slide-up" delay="1000" easing="ease" duration="1500">
          <MessageContainer>
            <SubTitle>GREETINGS</SubTitle>
            <HeroText>
              직관적인 UX와 실용적인 UI,
              <br />
              인터랙션으로 사용자를 감동시키고 싶은
              <br />웹 프론트엔드 개발자 <Underline>이원국</Underline>입니다.
            </HeroText>
            <Paragraph>
              Reddot, Spark Award 등 다수의 국제·국내 어워드 수상 경력의
              <br />
              산업디자이너 출신 프론트엔드 개발자입니다.
              <br />
              UX·UI, 디자인 시스템, 클라우드 컴퓨팅에 관심이 있습니다.
            </Paragraph>
          </MessageContainer>
        </Animator>
      </ContentsWrapper>
      <LottieContainer onClick={() => scrollTo('#mission')}>
        <ScrollDown />
      </LottieContainer>
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
  top: 40%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 300;
`;

const MessageContainer = styled.article`
  margin: 0 auto;
  /* margin-top: 200px; */
  width: 1140px;
  padding: 0 15px;

  @media (max-width: 799px) {
    width: initial;
  }
`;

const SubTitle = styled.p`
  color: #00c68e;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 799px) {
    /* font-size: 12px; */
  }
`;

const HeroText = styled.h1`
  margin-bottom: 42px;
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.28;
  word-break: keep-all;

  @media (max-width: 799px) {
    margin-bottom: 34px;
    font-size: 23px;
    word-break: break-all;
  }
`;

const Underline = styled.strong`
  text-decoration: underline;
  text-underline-offset: 8px;
`;

const Paragraph = styled.p`
  color: #999;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1.67;

  @media (max-width: 799px) {
    font-size: 14px;
    word-break: break-all;
  }
`;

const LottieContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  z-index: 1000;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 0.1;
  }
`;

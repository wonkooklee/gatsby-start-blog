import * as React from "react";
import styled from "styled-components";
import "./index.css";

import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Hero from "../containers/ThreeJS/Hero";

const Container = styled.main`
  background-color: #fff;
  font-family: "-apple-system, Roboto, sans-serif, serif";
  width: 100%;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1140px;
`;

const MessageContainer = styled.article`
  margin-top: 140px;
  padding: 0 15px;
  width: 1140px;
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
  color: #333;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.28;
  word-break: keep-all;
`;

const ButtonContainer = styled.div``;

const Button = styled.a`
  border: 1px solid #00c68e;
  border-radius: 30px;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  height: 60px;
  line-height: 60px;
  margin-bottom: 60px;
  margin-top: 16px;
  text-align: center;
  transition: all 0.25s ease;
  width: 200px;
  cursor: pointer;

  &,
  &:active,
  &:visited {
    color: #00c68e;
  }

  &:hover {
    background-color: #00c68e;
    color: #fff;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  width: 1140px;

  li {
    margin: 15px;
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <Header></Header>
      <Hero></Hero>
      <Wrapper>
        <MessageContainer>
          <SubTitle>BLOG SNAPSHOT</SubTitle>
          <HeroText>
            끊임없이 배우고 기록하며
            <br />
            지식과 경험을 전달하기 위해 노력합니다. 🚀
          </HeroText>
          <ButtonContainer>
            <Button href="https://velog.io/@oneook" target="_blank">
              블로그 보러 가기
            </Button>
          </ButtonContainer>
        </MessageContainer>
        <Section>
          <CardContainer>
            {cardDatas.map((data) => (
              <Card {...data} key={data.id} />
            ))}
          </CardContainer>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default IndexPage;

const cardDatas = [
  {
    id: 1,
    tag: "TOY PROJECT",
    title: "썸네일 메이커(Thumbnail Maker) 만들기",
    contents:
      "누구든지 10초 안에 무난한 벨로그 썸네일을 만들 수 있습니다. 어도비, 오피스 없어도 됩니다. 당신은 개발과 글쓰기에만 집중하세요. 나의 첫 토이 프로젝트 개발기",
    footer: "2021년 8월 10일",
    imageUrl:
      "https://velog.velcdn.com/images%2Foneook%2Fpost%2Fb0c0d7ab-d5fc-462a-80d0-cba412283931%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.38.31.png",
    url: "https://velog.io/@oneook/%EC%8D%B8%EB%84%A4%EC%9D%BC-%EB%A9%94%EC%9D%B4%EC%BB%A4Thumbnail-Maker-Toy-Project",
  },
  {
    id: 2,
    tag: "TRANSLATION",
    title: "프론트엔드 개발자라면 반드시 알아두어야 할 32가지의 UI 요소 (번역)",
    contents:
      "원제 : 32 User Interface Elements For UI Designers프론트엔드 개발자는 유저 인터페이스(UI)에 대해 그 어떤 개발자보다 잘 이해하고 숙지해야 합니다. 디자이너와 소통하며 그들을 이해하고, 때론 스스로 제품과 서비스의 사용성을 개선하기",
    footer: "2021년 8월 15일",
    imageUrl:
      "https://velog.velcdn.com/images/oneook/post/50e858f9-9efd-4eab-9096-c35c5ef2ac3e/thumbnail_til.jpg",
    url: "https://velog.io/@oneook/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EB%B0%98%EB%93%9C%EC%8B%9C-%EC%95%8C%EC%95%84%EB%91%90%EC%96%B4%EC%95%BC-%ED%95%A0-32%EA%B0%80%EC%A7%80%EC%9D%98-UI-%EC%9A%94%EC%86%8C-%EB%B2%88%EC%97%AD",
  },
  {
    id: 3,
    tag: "TOY PROJECT",
    title:
      "Unsplash 랜덤 이미지 요청과 클로저를 활용한 모듈 패턴으로 예제 만들기",
    contents: `'What is Your Tag?' 예제를 직접 만들어보면서 url만으로 unsplash 사이트의 속 특정 키워드의 랜덤 이미지 가져오는 법, 그리고 자바스크립트 모듈 패턴(Module Pattern) 설계를 공부해봤다.`,
    footer: "2021년 8월 13일",
    imageUrl:
      "https://velog.velcdn.com/images%2Foneook%2Fpost%2F0973d0fa-2d4d-4c90-9c91-2c9674d963ae%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.24.11.png",
    url: "https://velog.io/@oneook/%EB%8B%B9%EC%8B%A0%EC%9D%98-%ED%83%9C%EA%B7%B8%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94-Toy-Project",
  },
  {
    id: 4,
    tag: "RETROSPECT",
    title: "인프랩 심야 FE 네트워킹 데이 참여 후기",
    contents:
      "이벤트 링크인프랩에서 주최한 프론트엔드 개발자 오프라인 네트워킹 이벤트에 운좋게 당첨되어 어제 저녁 처음으로 개발자의 성지 판교에 다녀왔습니다. 🎉같은 업계에서도 공통된 포지션의 분들은 어떤 분들이신지, 어떤 생각을 하시는지 궁금했고, 제가 속한 프론트엔드 분야의 전",
    footer: "2021년 8월 24일",
    imageUrl:
      "https://velog.velcdn.com/images/oneook/post/fc433b42-362e-4a7c-88c1-3ab59db031bc/image.jpg",
    url: "https://velog.io/@oneook/%EC%9D%B8%ED%94%84%EB%9E%A9-FE-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9-%EB%8D%B0%EC%9D%B4%EC%97%90-%EB%8B%A4%EB%85%80%EC%99%94%EC%8A%B5%EB%8B%88%EB%8B%A4",
  },
  {
    id: 5,
    tag: "RETROSPECT",
    title: "프론트엔드 개발자로서 좋았던 책들 · 간단한 서평",
    contents: `최근에 읽은 책 네 권이 가까운 시일 내에 내가 발전해야 할 방향과 잘 맞는것 같아 추천하게 되었습니다. 『개발자의 글쓰기』는 개발자의 직무와 떼려야 뗼 수 없는 '글쓰기'를 가볍게 이해하기 좋은 책이었으며 『자바스크립트 코딩의 기술』은 ES6 이후 모던 자바스크립트의`,
    footer: "2022년 2월 26일",
    imageUrl:
      "https://velog.velcdn.com/images/oneook/post/5c6eff56-5501-4960-bdee-765e6dbd4ae2/%E1%84%89%E1%85%A5%E1%84%91%E1%85%A7%E1%86%BC.jpg",
    url: "https://velog.io/@oneook/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A1%9C%EC%84%9C-%EC%A2%8B%EC%95%98%EB%8D%98-%EC%B1%85%EB%93%A4-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%84%9C%ED%8F%89",
  },
  {
    id: 6,
    tag: "RETROSPECT",
    title: "Vuex와 함께하는 더 나은 전역 상태 관리",
    contents: `현재 저희 회사는 프론트엔드 프레임워크로 Vue를 채택하여 사용하고 있습니다. 하지만 제가 담당하는 프로젝트에서 Vuex를 사용하고 있진 않았습니다. authentication 등 전역으로 관리되어야 하는 데이터를 Vue 커스텀 플러그인을 사용하고 있는 상황이었습니다.`,
    footer: "2022년 3월 5일",
    imageUrl:
      "https://velog.velcdn.com/images/oneook/post/430dde11-fdba-4278-909f-d3f8be6a402c/vuex.jpg",
    url: "https://velog.io/@oneook/Vuex%EC%99%80-%ED%95%A8%EA%BB%98-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC",
  },
];

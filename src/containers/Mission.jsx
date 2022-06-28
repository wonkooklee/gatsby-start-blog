import React from "react";
import styled from "styled-components";

import HeaderType from "../components/Messages/HeaderType";
import ParagraphType from "../components/Messages/ParagraphType";
import SubjectType from "../components/Messages/SubjectType";
import Animator from "../components/Event/Animator";

const Mission = () => {
  return (
    <Container>
      <Wrapper>
        <Animator
          motion="slide-up"
          easing="ease-in"
          duration="1000"
          delay="300"
        >
          <Heading>
            <HeaderType subtitle="MISSION">
              사용자의 경험을 위한
              <br />
              기술의 가치를 생각하는
              <br />
              가치 지향 개발자를 꿈꿉니다.
            </HeaderType>
            <ParagraphType>
              프론트엔드는 인간과 서비스, 기술이 만나는 접점을 설계하는
              중요한 분야입니다. 기술과 서비스가 추구하는 사명이 사용자와 만나
              비로소 그 가치가 실현되는 순간을 놀랍고 아름다운 경험으로 만들고
              싶습니다.
              <br />
              맹목적인 기술 추구보다 본질적인 가치를 지향하는
              <br />
              <Strong>‘가치 지향 개발자’</Strong>로 성장하는 것을 목표로 합니다.
            </ParagraphType>
          </Heading>
        </Animator>
        <Contents>
          {subData.map((data, index) => (
            <Animator
              motion="slide-up"
              easing="ease"
              delay={(index + 1) * 100}
              duration="1000"
            >
              <SubjectType title={data.title} caption={data.caption}>
                {data.content}
              </SubjectType>
            </Animator>
          ))}
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default Mission;

const Container = styled.section`
  background-color: aliceblue;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 150px 20px;
  width: 1140px;

  @media (max-width: 799px) {
    width: initial;
    padding: 80px 20px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    flex-shrink: 0;
  }

  @media (max-width: 799px) {
    display: block;
  }
`;

const Strong = styled.strong`
  margin-right: 2px;
`;

const Contents = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  row-gap: 40px;

  @media (max-width: 799px) {
    margin-top: initial;
    display: block;
  }
`;

const subData = [
  {
    title: "PROBLEM SOLVER 🔑",
    caption: "주변의 문제는 내가 해결한다",
    content: `문제 해결을 지향합니다. 단순한 기술적 문제 뿐만 아니라 직접 팀 내
기술 도입을 추진하고, 컨벤션 개선, 레거시 코드 개선에 적극적으로
참여하여 직무, 직무 환경의 전반의 문제를 인식하고 팀에 기여하기 위해
노력합니다.`,
  },
  {
    title: "QUICK LEARNER ⚡",
    caption: "주변의 문제는 내가 해결한다",
    content: `인턴 과정에서, Serverless Framework로 AWS 인프라 프로비저닝 및 GCP
모바일 알림 기능 파이프라인의 초기 프로토타입 구현의 핵심적인 역할을
수행한 경험이 있습니다. 주어진 일을 해결하기 위해 분야가 다른 난제가
주어지더라도 적극적으로, 빠르게 배워 업무에 적용하기 위해
노력합니다.`,
  },
  {
    title: "COOPERATIVE 🤝",
    caption: "문제를 공유하고 함께 해결한다",
    content: `타 직군의 동료에게도 의견을 잘 제시하고 보완점을 함께 탐구하는 등
적극적인 협력 관계를 유지합니다. 일방적인 업무 전달과 구현에 그치지
않고 능동적으로 문제와 해결 방향을 공유하여 투명한 업무 가시성과
공동 목표의 기한내 달성을 위해 노력합니다.`,
  },
  {
    title: "SELF MOTIVATED ✨",
    caption: "끊임없는 성장을 추구한다",
    content: `제가 개발한, 개발에 참여한 서비스를 이용해주는 사용자의 만족을
최고의 모티베이션으로 생각합니다. 사용자에게 최고의 경험을 제공하기
위한 학습과 성장에 시간과 노력을 아끼지 않습니다. 발전 동기와 성장
기제는 자신의 온전한 성취로부터 비롯된다고 믿습니다.`,
  },
];

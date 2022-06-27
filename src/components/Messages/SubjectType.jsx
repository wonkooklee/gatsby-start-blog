import React from "react";
import styled from "styled-components";

const SubjectType = ({ children, title, caption }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Caption>{caption}</Caption>
      <Paragraph>{children}</Paragraph>
    </Container>
  );
};

export default SubjectType;

const Container = styled.div`
  @media (max-width: 799px) {
    margin-top: 30px;
  }
`;

const Header = styled.h3`
  margin: 0px;
  color: #333;
  font-size: 28px;
  font-weight: 500;
  -webkit-letter-spacing: -0.5px;
  -moz-letter-spacing: -0.5px;
  -ms-letter-spacing: -0.5px;
  letter-spacing: -0.5px;
  line-height: 1.28;
  word-break: keep-all;

  @media (max-width: 799px) {
    padding-top: 20px;
    font-size: 18px;
    border-top: 1px solid #999;
  }
`;

const Caption = styled.p`
  margin: 0;
  color: #999;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1.67;

  @media (max-width: 799px) {
    font-size: 14px;
  }
`;

const Paragraph = styled.p`
  color: #000;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1.8;
  word-break: keep-all;
  
  @media (max-width: 799px) {
    font-size: 14px;
    width: 100%;
    word-break: break-all;
  }
`;

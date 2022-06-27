import React from "react";
import styled from "styled-components";

const ParagraphType = ({ children }) => {
  return (
    <Container>
      <Paragraph>{children}</Paragraph>
    </Container>
  );
};

export default ParagraphType;

const Container = styled.div`
  width: 500px;
  margin-top: 60px;

  @media (max-width: 799px) {
    margin-top: 0;
    padding-bottom: 18px;
    width: initial;
  }
`;

const Paragraph = styled.p`
  color: #333;
  font-size: 1.375rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1.67;
  word-break: keep-all;

  @media (max-width: 799px) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
    word-break: keep-all;
    width: 80%;
  }
`;

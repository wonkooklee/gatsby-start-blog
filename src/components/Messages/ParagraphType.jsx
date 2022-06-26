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
`;

const Paragraph = styled.p`
  margin-top: 60px;
  color: #333;
  font-size: 1.375rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1.67;
  word-break: keep-all;
`;

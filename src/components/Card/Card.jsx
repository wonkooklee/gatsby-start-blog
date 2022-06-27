import React from 'react'
import styled from "styled-components"

const Card = ({tag, title, contents, footer, imageUrl, url}) => {
  return (
    <Container>
      <LinkWrapper href={url} target="_blank">
        <Image src={imageUrl}></Image>
        <Info>
          <Tag>{tag}</Tag>
          <Title>{title}</Title>
          <Contents>{contents}</Contents>
          <Footer>{footer}</Footer>
        </Info>
      </LinkWrapper>
    </Container>
  )
}

export default Card

const Container = styled.li`
  width: 350px;
  /* height: 511px; */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 39px 67px 3px hsla(0,0%,67%,.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 799px) {
    width: auto;
  }
`

const LinkWrapper = styled.a`
  position: top;
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 193px;
  object-fit: cover;

  @media (max-width: 799px) {
    height: 160px;
  }
`;

const Info = styled.div`
  padding: 20px 35px;
  overflow: hidden;
`

const Tag = styled.p`
  color: #00c68e;
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .5px;
  margin-bottom: 11px;
`

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
  height: 3.75rem;
  letter-spacing: -.48px;
  line-height: 1.5;
  margin-bottom: 20px;
  overflow: hidden;

  @media (max-width: 799px) {
    font-size: 16px;
    margin-bottom: initial;
  }
`

const Contents = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #707070;
  font-size: 1rem;
  font-weight: 100;
  height: 85px;
  letter-spacing: -.5px;
  line-height: 1.75;
  margin-bottom: 30px;
  opacity: 1;
  overflow: hidden;

  @media (max-width: 799px) {
    font-size: 14px;
    margin: initial;
    height: 75px;
  }
`

const Footer = styled.p`
  border-top: 0.5px solid rgba(34,34,34,.4);
  color: #7f7f7f;
  font-size: .875rem;
  font-weight: 100;
  padding-top: 20px;
`
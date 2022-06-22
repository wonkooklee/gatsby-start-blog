import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <StyledHeader>
      <BlogTitleContainer>
        <BlogTitle>{`WONKOOK_LEE`}</BlogTitle>
      </BlogTitleContainer>
      <NavContainer>
        <NavList>
          <Nav>
            <LinkWrapper href='#'>소개</LinkWrapper>
          </Nav>
          <Nav>
            <LinkWrapper href='#'>이력</LinkWrapper>
          </Nav>
          <Nav>
            <LinkWrapper href='#'>블로그</LinkWrapper>
          </Nav>
        </NavList>
      </NavContainer>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  padding: 0 36px;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #fff;
`;

const BlogTitleContainer = styled.div``

const BlogTitle = styled.h1`
  font-weight: 600;
  font-size: 28px;
  color: #333;
`

const NavContainer = styled.nav``

const NavList = styled.ul`
  display: flex;
  margin-left: 46px;
`

const Nav = styled.li`
  margin-right: 35px;
`

const LinkWrapper = styled.a`
  color: #333;
  font-size: 16px;
  cursor: pointer;
`
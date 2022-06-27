import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ScrollContext } from "../../contexts/ScrollContext";

const Header = () => {
  const { isScrollTop } = useContext(ScrollContext);

  return (
    <StyledHeader
      transparency={isScrollTop}
      className={isScrollTop ? "transparent" : ""}
    >
      <BlogTitleContainer>
        <BlogTitle>{`wonkook.dev`}</BlogTitle>
      </BlogTitleContainer>
      <NavContainer>
        <NavList>
          <Nav>
            <LinkWrapper href="#">소개</LinkWrapper>
          </Nav>
          <Nav>
            <LinkWrapper
              href="https://www.linkedin.com/in/wonkook"
              target="_blank"
            >
              이력
            </LinkWrapper>
          </Nav>
          <Nav>
            <LinkWrapper href="https://velog.io/@oneook" target="_blank">
              블로그
            </LinkWrapper>
          </Nav>
        </NavList>
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 36px;
  display: flex;
  align-items: center;
  height: 60px;
  z-index: 1000;
  background-color: ${({ transparency }) =>
    transparency ? "transparent" : "#fff"};
  backdrop-filter: ${({ transparency }) =>
    transparency ? "blur(2px)" : "initial"};
  transition: background-color 0.5s;

  @media (max-width: 799px) {
    padding: 0 20px;
    backdrop-filter: none;
  }
`;

const BlogTitleContainer = styled.div``;

const BlogTitle = styled.h1`
  font-weight: 600;
  font-size: 28px;
  color: #333;

  .transparent & {
    color: #fff;
  }

  @media (max-width: 799px) {
    font-size: 22px;
  }
`;

const NavContainer = styled.nav`
  @media (max-width: 799px) {
    position: relative;
    flex-grow: 1;
  }
`;

const NavList = styled.ul`
  display: flex;
  margin-left: 46px;

  @media (max-width: 799px) {
    margin-left: 30px;
    justify-content: flex-end;
  }
`;

const Nav = styled.li`
  margin-right: 35px;

  @media (max-width: 799px) {
    margin-left: 20px;
    margin-right: initial
  }
`;

const LinkWrapper = styled.a`
  color: #333;
  font-size: 16px;
  cursor: pointer;
  .transparent & {
    color: #fff;
  }

  @media (max-width: 799px) {
    font-size: 12px;
  }
`;

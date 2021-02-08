import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <MenuContainer>
        <FooterMenu>
          <FooterLink href="/">Home</FooterLink>
          <LinkSeparator />
          <FooterLink href="/">About</FooterLink>
          <LinkSeparator />
          <FooterLink href="https://ko-fi.com/nextspacexlaunchtime">Support</FooterLink>
        </FooterMenu>
      </MenuContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContainer = styled.div``;

const FooterMenu = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
`;

const FooterLink = styled.a`
  color: #999;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

const LinkSeparator = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 100;
  margin: 0 15px;
  &::before {
    content: '|';
  }
`;

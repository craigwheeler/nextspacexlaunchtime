import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <MenuContainer>
        <FooterMenu>
          <FooterLink>Home</FooterLink>
          <LinkSeparator />
          <FooterLink>About</FooterLink>
          <LinkSeparator />
          <FooterLink>Donate</FooterLink>
        </FooterMenu>
        <FooterText>somthing about the site nextspacexlaunchtime.com 2021</FooterText>
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
  &:hover {
    color: #fff;
  }
`;

const LinkSeparator = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 100;
  &::before {
    content: '|';
  }
`;

const FooterText = styled.h1`
  color: #fff;
  font-size: 10px;
  font-weight: 100;
`;

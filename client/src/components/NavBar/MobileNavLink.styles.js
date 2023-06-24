import styled, { css, keyframes } from 'styled-components';
import { slideInRight, slideOutRight } from 'react-animations';

export const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const slideInAnimation = keyframes`${slideInRight}`;
const slideOutAnimation = keyframes`${slideOutRight}`;

export const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #94FBBB;
  width: 100%;
  flex-direction: column;
  align-items: center;
  top: 65px;
  left: 0;
  position: fixed;
  border-radius: 20px;
  z-index: 99;

  ${({ isOpen, animSlideDurationInSec }) =>
    isOpen &&
    css`
      animation: ${slideInAnimation} ${animSlideDurationInSec}s forwards;
    `}

  ${({ isOpen, animSlideDurationInSec }) =>
    !isOpen &&
    css`
      animation: ${slideOutAnimation} ${animSlideDurationInSec}s forwards;
    `}
`;


export const LinkItem = styled.li`
  height: 10%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  color: black;

  &:hover{
      border-top: 2px solid #2ecc71;
  }
`;


export const Marginer = styled.div`
  height: 1em;
`;


export const Link = styled.a`
  text-decoration: underline;
  color: inherit;
  font-size: inherit;

  &:active {
    transform: scale(1.2);
  }

  @media (max-width:500px){
    font-size: 15px;
  }
`;
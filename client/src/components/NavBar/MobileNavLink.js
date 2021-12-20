import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuToggle } from './MenuToggle';
import {DeviceSize} from '../Responsive';

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: gray;
  width: 100%;
  flex-direction: column;
  align-items: center;
  top: 65px;
  left: 0;
  position: absolute;
`;

const LinkItem = styled.li`
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
  color: white;

  &:hover{
      border-top: 2px solid #2ecc71;
      color: #A0EE45;
  }
`;


const Marginer = styled.div`
  height: 1em;
`;


const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;

  @media (max-width:${DeviceSize.smallerMobile}px){
    font-size: 10px;
  }
`;

export function MobileNavLinks({ setMobileStock }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setMobileStock(isOpen);
    if(isOpen){
      document.body.style.overflow='hidden';
    }

    return () => {
      document.body.style.overflow='unset';
    }
  }, [isOpen, setMobileStock]);


  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/home"> Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/stockPicks"> Stocks </Link>
          </LinkItem>
          <LinkItem>
            <Link href="/cryptoPicks"> Cryptocurrency </Link>
          </LinkItem>
          <Marginer />
        </LinksWrapper>
      )}

    </NavLinksContainer>
  )
};
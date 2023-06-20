import React, { useState, useEffect } from 'react';
import { MenuToggle } from './MenuToggle';
import { NavLinksContainer, LinksWrapper, LinkItem, Link, Marginer } from './MobileNavLink.styles';

export function MobileNavLinks({ setMobileStock }) {
  const [isOpen, setOpen] = useState(false);
  const [isOpenAnim, setOpenAnim] = useState(false);
  const animSlideDurationInSec = 0.3;


  useEffect(() => {
    setMobileStock(isOpen);
    if(isOpen){
      document.body.style.overflow='hidden';
    }

    return () => {
      document.body.style.overflow='unset';
    }
  }, [isOpen, setMobileStock]);

  const handleToggle = () => {
    if (!isOpen) {
      setOpen(true);
      setOpenAnim(true);
    } else {
      setOpenAnim(false);
      setTimeout(() => {
        setOpen(false);
      }, animSlideDurationInSec * 1000);
    }
  };

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => handleToggle()} />
      {isOpen && (
        <LinksWrapper isOpen={isOpenAnim} animSlideDurationInSec={animSlideDurationInSec}>
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
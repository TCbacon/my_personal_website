import React, { useState, useEffect } from 'react';
import { MenuToggle } from './MenuToggle';
import { NavLinksContainer, LinksWrapper, LinkItem, Link, Marginer } from './MobileNavLink.styles';

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
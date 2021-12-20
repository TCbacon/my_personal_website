import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { NavLinks } from './NavLinks';
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../Responsive";
import { MobileNavLinks } from './MobileNavLink';

const NavBarContainer = styled.div`
    width: 100%;
    height: 50px;
    box-shadow: 0 1px 3px rgba(15,15,15,0.13); 
    display: flex;
    align-items: center;
    background-color:silver;
`

const LeftSection = styled.div`
    display: flex;
    padding 0em 1em;

`

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: right;
`

const RightSection = styled.div`
    display: flex;
    margin-right: 40px;
`

export function Navbar({ setMobileStock }) {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return <NavBarContainer>
        <LeftSection><Logo /></LeftSection>
        <MiddleSection>
            {!isMobile && <NavLinks setMobileStock={setMobileStock}/>}
        </MiddleSection>
        <RightSection>
            {isMobile && <MobileNavLinks setMobileStock={setMobileStock} />}
        </RightSection>
    </NavBarContainer>
}
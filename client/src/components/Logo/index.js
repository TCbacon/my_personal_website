import React from 'react';
import styled from 'styled-components';
import { DeviceSize } from '../Responsive';

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 100px;
    height: 50px;

    img{
        width: 100%;   
        height: 100%;
    }

    @media only screen and (max-width: ${DeviceSize.mobile}px) {
        width: 50px;
        height: 20px;
}
`;

const LogoText = styled.h2`
    margin: 0px;
    font-size: 30px;
    margin-left: 10px;
    color: #222;
    font-weight: 500;

    @media only screen and (max-width: ${DeviceSize.mobile}px) {
        font-size: 10px;
    }

`;

export function Logo(props) {
    return <LogoWrapper>
        <LogoImg>
            <a href="/home">
                <img src="https://fakeimg.pl/100x100/?text=logo" alt="site-logo" />
            </a>
        </LogoImg>
        <LogoText> My Site </LogoText>
    </LogoWrapper >
}

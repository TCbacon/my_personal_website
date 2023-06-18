import React from 'react';
import { LogoWrapper, LogoImg, LogoText } from './Logo.styles';
import { DeviceSize } from '../Responsive';


export function Logo(props) {

    const generateRandomTextColor = () => {
        let logoText = document.getElementById('logo-text-id');
        let colors = ["red", "blue", "green", "yellow", "orange", "black", "white"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        logoText.style.color = randomColor;
    };

    return <LogoWrapper>
        <LogoImg>
            <a href="/home">
                <img src="https://fakeimg.pl/100x100/?text=logo" alt="site-logo" />
            </a>
        </LogoImg>
        <LogoText id='logo-text-id' onClick={generateRandomTextColor}> My Site </LogoText>
    </LogoWrapper >
}

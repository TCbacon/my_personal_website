import styled from 'styled-components';
import { DeviceSize } from '../Responsive';

export const Wrapper = styled.div`
text-align: center;
width: 100%;
`;  


export const DisclaimerBox = styled.div`
    color: yellow;
    left: 0;
    margin-top: 20px;
    text-align: center;
    width: 100%;
    background-color: #A0A0A0;
    font-size: 15px;
`;


export const TextBox = styled.div`
text-align: center;
box-sizing: border-box;
background-color: #C3CECC;
display: block;
font-size: 20px;
`;


export const PutsellDesc = styled.p`
margin-left: 10px;
line-height: 2;
font-size: 18px;
`;

export const Image = styled.img`
width: 300px;
height 600px;

@media (max-width: ${DeviceSize.mobile}px){
    width: 250px;
    height 400px;
}
`;

export const ImageWrapper = styled.div`
margin-left: 10px;
text-align: left;
display: flex;

@media (max-width: ${DeviceSize.mobile}px){
    display: block;
}
`;

export const StrategiesTable = styled.div`
border: 3px solid #4CAF50;
margin-right: auto;
margin-left: auto;
text-align: center;
width: 90%;
background: white;
font-size: 20px;

h1{
    color: green;
}

a{
    color: green;
    display: block;
}

a:hover{
    color: yellow;
}



@media only screen and (max-width: ${DeviceSize.tablet}px) {
    display: none;
}

`;

export const VideoWrapper = styled.div`

    h1
    {
        color: #69FF69;
    }
    margin-top: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #7F7F7F;
`;

export const TitleWrapper = styled.div`
    color: #94FBBB;
    text-align: center;
`;

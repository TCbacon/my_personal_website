import styled from 'styled-components';
import { DeviceSize } from '../Responsive';


export const Wrapper = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const InfoBox = styled.div`
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #C3CECC;
    display: block;


    p{
        font-size: 20px;
        padding-left:10px;
    }


    @media only screen and (max-width: ${DeviceSize.mobile}px){
        font-size: 15px;
}
`;

export const ExpList = styled.div`
    list-style: none;
    text-align: center;
    font-size: 15px;
`;


export const MyImage = styled.img`
    height:480px;
    width: 450px;
    margin-right: 10px;

    @media only screen and (max-width:500px){
        height:230px;
        width: 200px;
    }
`;

export const ImageWrapper = styled.div`
    text-align: center;
`;


export const ResumeLink = styled.a`
    color: blue;

    :hover{
        color: #1BFF1B;
    }
`;
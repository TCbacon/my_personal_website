import styled from "styled-components";
import { DeviceSize } from "../Responsive";


export const Wrapper = styled.div`
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export const OptionsLink = styled.a`
    color: white;
    font-size: 20px;

    :hover{
        color: yellow;
    }

    @media only screen and (max-width: ${DeviceSize.tablet}px) {
        font-size: 15px;
    }
`;

export const BottomOptionStrategies = styled.div`
    border: 3px solid #4CAF50;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    text-align:center;
    background-color: #ACACAC;
    color: #94FBBB;
    border-radius: 10px;

    @media only screen and (max-width: ${DeviceSize.tablet}) {
        h3{
            font-size: 10px;
        }
}
`;


export const Description = styled.div`
    padding-left: 5px;
    padding-right:5px;
    text-align: left;
    background-color: #94FBBB;
    font-size: 18px;
    border-radius: 10px;
`;

export const DescTitle = styled.h1`
    text-align: center;
`;

export const WaringMsgBox = styled.div`
    color: yellow;
    margin-top: 20px;
    text-align: center;
    background-color: #A0A0A0;
    border-radius: 10px;
    padding-bottom: 1px;
`;

export const StockLinksBox = styled.div`
    text-align: center;
    border: 3px solid #4CAF50;
    background-color: #A0A0A0;
    padding-right: 20px; 
    border-radius: 10px;
`;
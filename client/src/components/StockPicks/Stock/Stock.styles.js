import styled from "styled-components";
import { DeviceSize, PlotSize } from "../../Responsive";


export const Title = styled.div`
    h1{
        font-size: 40px;
        text-align: center;
        color: #94FBBB;
    }

    h2{
        font-size: 30px;
        color: #94FBBB;
    }

    h3{
        font-size: 20px;
        color: #DFDFDF;
    }

    @media only screen and (max-width: ${DeviceSize.tablet}px) {
        font-size: 30px;
    }
`;


export const ErrorTitle = styled.div`
    color: #FF7F7F;
    text-align: center;
`;

export const PlotStyle = styled.div`
    text-align: center;
    margin-top: 20px;

    .plot{
    display: block;
    }

    h1{
        font-size: 20px;
        text-align: center;
    }

    @media only screen and (max-width: ${DeviceSize.tablet}px) {
        font-size: 8px;
    }

`;

export const Wrapper = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    visibility: ${props => (props.isMobileStock ? `hidden` : `visible`)}
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
    width: 50%;
    margin-top: 20px;
    border: 3px solid #4CAF50;
    margin-left: auto;
    margin-right: auto;
    text-align:center;
    background-color: #ACACAC;
    color: #94FBBB;
    border-radius: 20px;

    @media only screen and (max-width: ${PlotSize.tabletWidth}px) {
        h3{
            font-size: 10px;
        }
}
`;


export const ScrollButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 20px;
    font-weight: bold;

    :hover{
        background-color: ${props => props.className === 'resume-btn' ? '#74ff5e' : '#ff9891'};
    }
`;

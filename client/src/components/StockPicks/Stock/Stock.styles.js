import styled from "styled-components";
import { DeviceSize } from "../../Responsive";


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

export const TableStyle = styled.table`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-bottom: 30px;
    font-size: 18px;

    text-align: center;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 90%;
    background: white;

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 5px;
    }

    @media (max-width: ${DeviceSize.tablet}px){
        font-size: 10px;
    }
`;

export const PlotStyle = styled.div`

    text-align: center;

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
    border: 3px solid #4CAF50;
    margin-left: auto;
    margin-right: auto;
    text-align:center;
    background-color: #ACACAC;
    color: #94FBBB;

    @media only screen and (max-width: ${DeviceSize.tablet}) {
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
`;

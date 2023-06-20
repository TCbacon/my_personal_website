import styled from 'styled-components';
import { DeviceSize } from '../Responsive';


export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

export const CryptoTable = styled.div`
    margin-left: auto;
    margin-right: auto;   
    height: 500px;
    background: linear-gradient(180deg, purple 40%, blue 80%);
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    border-radius:10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2px;
    color: white;
        
    @media only screen and (max-width: ${DeviceSize.mobile}px){
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;   
    }
`;

export const Icon = styled.img`

:hover {
    background-color: yellow;
}

@media only screen and (max-width:${DeviceSize.mobile}px){
    width: 20px;
    height: 20px;
}
`;

export const Title = styled.div`
    color: #DCB7FF;
    margin-top: 20px;
    text-align: center;
    width: 100%;
`;

export const Description = styled.div`
    text-align: center;
    background-color:#D8B2D8;
    font-size: 18px;
    border-radius:20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;

    p{
        text-align: left;
    }
`;

export const WaringMsg = styled.div`
    color: yellow;
    left: 0;
    margin-top: 20px;
    text-align: center;
    width: 100%;
    background-color: #A0A0A0;
    border-radius: 20px;

    @media all and (max-width:${DeviceSize.mobile}px){
        left: 0;
        margin-top: 20px;
        text-align: center;
        font-size: 15px;
    }
`;

export const Image = styled.img`
    height:400px;
    width: 480px;
    border-radius:20px;
    @media only screen and (max-width:900px){
        height:130px;
        width: 200px;
    }

    @media only screen and (max-width:500px){
        height:180px;
        width: 230px;
    }
`;
import styled from 'styled-components';
import { DeviceSize } from '../Responsive';

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.div`
    width: 100px;
    height: 50px;

    :hover{
        background-color: #94FBBB;
        border-radius: 5px;
    }

    img{
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: ${DeviceSize.mobile}px) {
        width: 50px;
        height: 20px;
}
`;

export const LogoText = styled.h2`
    margin: 0px;
    font-size: 30px;
    margin-left: 10px;
    color: #222;
    font-weight: 500;

    @media only screen and (max-width: ${DeviceSize.mobile}px) {
        font-size: 10px;
    }

`;

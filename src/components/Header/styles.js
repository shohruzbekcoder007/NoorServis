import styled from "styled-components";

export const HeaderWrapper = styled.div`
    Width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLogo = styled.img`
    display: inline-block;
`;

export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    color: #021633;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
`;

export const HeaderMenuLeft = styled.div`
    display: inline-block;
    padding-right: 6px;
    display: flex;
    align-items: center;
`;

export const HeaderSeparater = styled.div`
    width: 2px;
    height: 32px;
    background-color: #F0E2CE;
`;

export const HeaderMenuRight = styled.div`
    display: inline-block;
    padding-left: 12px;
    display: flex;
    align-items: center;
`;

export const HeaderLeftLink = styled.span`
    display: inline-block;
    margin-right: 48px;
    position: relative;
    font-weight: ${props => props.active ? "bold" : "normal"};
    ::after {
        display: ${props => props.active ? "inline-block" : "none"};
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 24.5px;
        height: 1px;
        background-color: #000000;
        content: ""
    }
`;

export const HeaderRightLink = styled.span`
    display: inline-block;
    margin-left: 24px;
    position: relative;
    font-weight: ${props => props.active ? "bold" : "normal"};
    ::after {
        display: ${props => props.active ? "inline-block" : "none"};
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 24.5px;
        height: 1px;
        background-color: #000000;
        content: ""
    }
`;

export const RegisterLink = styled.span`
    display: inline-block;
    margin-left: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    color: #FFFFFF;
    padding: 4px 12px 4px 12px;
    background: #001730;
    border-radius: 5px;
    text-transform: uppercase;
`;
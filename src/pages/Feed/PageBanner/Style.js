import { css } from "@emotion/react";


export const SLayout = css`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SContainer = css`
    width: 720px;
    padding: 2px 20px 4px 20px;
    margin: 0px auto;
    height: 100%;
`;

export const SBtnBox = css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
    background-image: linear-gradient(to right, rgb(78,119,255), rgb(91,165,255));
    padding: 20px 18px 20px 17px;
    cursor: pointer;
`;

export const SBannerIconBox = css`
    width: 44px;
    height: 44px;
    flex: none;
    position: relative;
    margin-right: 8px;
`;

export const SBannerTextBox = css`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1 1;
    height: 42px;
    width: 571px;
    overflow: hidden;
`;


export const SBannerTextTop = css`
    font-weight: 600;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255,255,255,.72);
    letter-spacing: -1px;
    text-shadow: 0 0 6px rgba(0,0,0,.12);
`;

export const SBannerTextBottomBox = css`
   margin-top: 2px;
   display: inline-flex;
   font-size: 16px;
   font-weight: 700;
   color: #fff;
   letter-spacing: -6px;
   vertical-align: top;
   text-shadow: 0 0 6px rgba(0,0,0,.12);
`;

export const SBannerColorTextBottom = css`
   color: #ffb7e2;
`;

export const SBannerRigthIconBox = css`
    color: white;
    * {
        width: 100%;
        height: 100%;
    }
`;

export const SBannerIcon = css`
position: absolute;
transform: translate(-50%);
top: 00%;
left: 50%;
width: 100%;
height: 100%;

`;
export const SBannerI8con = css`
`;

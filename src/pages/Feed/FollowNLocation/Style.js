import { css } from "@emotion/react";


export const SFollowNLocationContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 66px;
    width: 100%;
    background-color: rgb(249,249,249);
`;


export const SFollowNLocationPaddingBox = css`
    display: flex;
    padding: 0px 20px;
    width: 720px;
    height: 100%;
`;

export const SFollowNLocationFullBox = css`
    position: relative;
    margin: 0px -20px;
    width: 720px;
    height: 100%;
`;

export const SFollowNLocationBox = css`
    padding: 6px 98px 6px 0px;
    background-color: #f8fafb;
    width: 720px;
    height: 100%;
`;

export const SFo6llowNLBox = css`
`;

export  const SMyLocation = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    padding: 12px 16px 12px 20px;
    background: #f8fafb;
`;

export const SMyLocationBtn = css`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    vertical-align: top;
    padding: 0;
    width: 62px;
    height: 100%;
    border-radius: 5px;
    border: none;
    background: transparent;
    font-size: 15px;
    font-weight: 600;
    color: rgb(127,141,170);
    letter-spacing: -0.5px;
    white-space: nowrap;
    overflow: visible;
    cursor: pointer;
`;

export const SMyLocationBtnIcon = css`
    margin: 0px 4px 0 0;
    width: 17px;
    height: 17px;
`;

export const SBeforeLine = css`
    position: absolute;
    width: 2px;
    top: 21px;
    left: 8px;
    height: 24px;
    border-radius: 2px;
    background-color: rgb(226,229,232);
`;
export const SFollowRouterBtnContainer = css`
    position: relative;
    height: 100%;
    white-space: nowrap;
`;
export const SFollowRouterBtnList = css`
    display: flex;
    position: relative;
    flex-direction: row;
    z-index: 1;
    width: 100%;
    height: 100%;
`;
export const SFollowBtnBox = (padding) => css`
    display: inline-block;
    padding: ${padding};
    vertical-align: top;
    height: 54px;
    background-color: transparent;
`;  

export const SFollowBtn = css`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 42px;
    border: none;
    padding: 0px 13px;
    border-radius: 5px;
    background: rgb(255,255,255);
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
`;

export const SPlusIcon = css`
    font-weight: 700;
    font-size: 14px;
    margin-right: 4px;
`;

export const SSelected = (isSelected) => css`
    font-weight: ${isSelected ? "700" : "normal" };
    color: ${isSelected ? "#fff" : "normal" };;
    box-shadow: ${isSelected ? "0 2px 6px 0 rgba(37,146,255,.35)" : "box-shadow: 0 2px 6px rgba(0,0,0,.06)" };
    background-image: ${isSelected ? "linear-gradient(90deg,#2d8dee,#2da1ee)" : "rgb(255,255,255)"};
`;
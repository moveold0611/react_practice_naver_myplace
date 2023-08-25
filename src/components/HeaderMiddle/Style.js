import { css } from "@emotion/react";

export const SLayout = css`
    padding: 20px 0px 11px 0px;
    width: 100%;
    height: 151px;
    background-color: rgb(6,180,149);
`;
export const SContainer = css`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    margin: 0px auto;
    height: 100%;
    width: 375px;
`;
export const SLoginBtnContainer = css`
    width: 191.5px;
    height: 64px;
    background-color: transparent;
    border: none;
    color: white;
    align-items: center;
    display: flex;
    cursor: pointer;
    margin-right: auto;
    padding: 0px 0px;
`;


export const SProfileImgContainer = css`
    margin-right: 29px;
    width: 64px;
    height: 64px;
`;

export const SImgOutLine = css`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1.5px solid white;
    box-shadow: 0px 0px 3px gray;
`;
export const SImgInLine = css`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1px solid #ddd;
    overflow: hidden;
`;
export const SProfileImg = css`
    border: none;
`;

export const SLoginTextContainer = css`
    display: flex;
    width: 98.5px;
    height: 20px;
`;

export const SLoginText = css`
    display: inline;
    text-align: left;
    line-height: 26px;
    font-size: 17px;
    margin-right: 5px;
    font-weight: 500;
    white-space: nowrap;
`;

export const SRightIcon = css`    
    position: relative;
    top: 30%;
    white-space: nowrap;
    width: 12px;
    height: 12px;
`;


export const SReviewNMissionContainer = css`
    display: flex;
    margin-top: 18px;
    width: 335px;
    height: 38px;
    flex-wrap: nowrap;
`;

export const SBtn = css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(12,197,164);
    border-radius: 9px;
    border: none;
    height: 38px;
    width: 100%;
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`;

export const SReviewContainer = css`
    width: 226px;
`;
export const SReviewBtnIcon = css`
    margin-right: 5px;
    width: 17px;
    height: 17px;
`;

export const SMissionContainer = css`
margin-left: 7px;
width: 102px;
`;

export const SMissionBtnIcon = css`
    margin-right: 5px;
    width: 17px;
    height: 17px;
    font-weight: 600;
`;
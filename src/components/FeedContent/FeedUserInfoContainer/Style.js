import { css } from "@emotion/react";


export const SFeedUserInfoContainer = css`
display: flex;
    height: 65px;
    align-items: center;
`;

export const SBtn = css`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0%;
`;

export const SFollowBtn = css`
    width: 70px;
    height: 30px;
    border: none;
    background-color: rgb(239,246,254);
    color: rgb(40,124,255);
    border-radius: 4px;
    text-align: center;
    font-weight: 600;
`;

export const SFeedUserInfoLeftBtn = css`
    display: flex;
    height: 62px;
    width: 612px;
    margin: -10px;
    padding: 10px;
    text-align: left;
`;

export const SUserProfileImgContainer = css`
    margin-right: 8px;
    width: 42px;
    height: 42px;
`;

export const SUserProfileImgOutlineBox = css`
    position: relative;
    width: 42px;
    height: 42px;
`;

export const SUserProfileImgOutline = css`
    position: absolute;
    height: 56px;
    width: 56px;
    inset: -7px;
    z-index: 20;
`;

export const SUserProfileOutlineImg = css`
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
`;

export const SUserProfileImgBox = css`
position: relative;
    
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
`;

export const SUserProfileImg = css`
    position: absolute;
    z-index: 10;
    width: 38px;
    height: 38px;
    transform: translate(-50%,-50%);
    background-position: 50% 50%;
    top: 50%;
    left: 50%;
`;


export const SProfileTextContainer = css`
    display: block;
    overflow: hidden;
    margin-top: 3px;
    text-align: left;

`;
export const SUsername = css`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: 16px;
`;
export const SReviewNFollowerTextBox = css`
    color: rgb(143,157,190);
`;


export const SProfileMenuBtnContainer = css`
    display: block;
    width: 26px;
    height: 30px;
    margin-left: 4px;
    margin-right: -12px;
`;

export const SProfileMenuBtnBox = css`
    display: block;
    position: relative;
    width: 26px;
    height: 30px;
`;
export const SProfileMenuBtn = css`
    position: relative;
    height: 30px;
    width: 26px;
`;

export const SProfileMenuBtnIcon = css`
    position: absolute;
    color: rgb(136,173,208);
    width: 18px;
    height: 18px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`;
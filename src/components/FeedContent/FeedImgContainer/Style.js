import { css } from "@emotion/react";

export const SFeedImgContainer = css`
    position: relative;
    overflow: hidden;
    margin-top: 2px;
    padding: 360px 0px 0px 0px;
    border-radius: 8px;
`;

export const SFeedImgBtnBox = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
`;

export const SContainer = css`
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

export const SMainImgBoxfirst = css`
    display: flex;
    position: relative;
    flex: none;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 59%;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

export const SMainImg = css`
    position: absolute;
    transform: translate(-50%);
    top: 0%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
`;

export const SMainImgBoxNext = css`
    display: flex;
    position: relative;
    margin-left: 2px;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: hidden;

`;

export const SMainImgNext = (pos) => css`
    border-${pos}-radius: 8px;
`;

export const SImgLocationContainer = css`
    height: 20px;
    position: absolute;
    right: 76px;
    bottom: 5px;
    left: 5px;
    text-align: left;
`;

export const SImgLocationBox = css`
    background: rgba(0,0,0,.6);
    color: #fff;
    display: inline-flex;
    align-items: center;
    vertical-align: top;
    max-width: 100%;
    padding: 0 4px;
    border-radius: 4px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 12px;
`;
export const SLocationIcon = css`
    width: 12px;
    height: 12px;
`;
export const SLocationText = css`
    height: 20px;
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 auto;
`;
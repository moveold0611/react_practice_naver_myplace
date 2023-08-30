import { css } from "@emotion/react";


export const SLayout = css`
    width: 100%;
    height: 48px;
`;
export const SContainer = css`
    margin: 0px auto;
    padding: 0px 20px;
    height: 100%;
    width: 720px;

`;

export const SCategoryContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px -20px;
    padding: 10px 0px 2px 0px;
    height: 100%;
    width: 720px;
`;

export const SCategoryPanContainer = css`
    position: relative;
    width: 100%;
    height: 100%;
    white-space: nowrap;
`;

export const SCategoryPanBox = css`
    position: relative;
    overflow: hidden;
    height: 100%;
    touch-action: pan-y;
    user-select: none;
`;

export const SCategoryBtnContainer = (num) => css`
    touch-action: pan-x;
    transform: translate(${num});
    transition: 0.5s ease;
    position: relative;
    display: flex;
    height: 100%;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: row;
    z-index: 1;
`;

export const SCategoryMovePanBtnBox = (pos) => css`
    ${pos}: 2px;
    position: absolute;
    padding: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    border: none;
    width: 28px;
    height: 100%;
    background-color: white;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
    transition: opacity .2s;
    :hover {
        opacity: 10;
        
    }

`;

export const SCategoryBtnBox = css`
    height: 100%;
    display: inline-block;
    vertical-align: top;
`;

export const SFirstBoxPadding = css`
    padding-left: 20px;
`;
export const SMiddleBoxPadding = css`
    padding-left: 6px;
`;
export const SLastBoxPadding = css`
    padding-left: 6px;
    padding-right: 20px;
`;



export const SCategoryBtn = css`
    box-sizing: border-box;
    height: 100%;
    border-radius: 19px;
    border: 1px solid #eaeef2;
    padding: 0px 13px;
    background-color: transparent;
    cursor: pointer;
`;

export const SCategoryMovePanBtn = css`
    width: 15px;
    height: 15px;
    color: rgb(102,102,102);
    background: none;
    transition: show 0.3s ease;
`;

export const SLay67uout = css`
`;

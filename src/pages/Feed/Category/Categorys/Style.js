import { css } from "@emotion/react";

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

export const SCategoryBtn = (isSelected) => css`
    box-sizing: border-box;
    height: 100%;
    border-radius: 19px;
    border: 1px solid #eaeef2;
    padding: 0px 13px;
    background-color: transparent;
    cursor: pointer;
    ${isSelected && "font-weight : 600"};
    ${isSelected && "border-color : rgb(66,66,66)"};
    ${isSelected && "background-color : rgb(66,66,66)"};
    ${isSelected && "color : rgb(255,255,255)"};
`;



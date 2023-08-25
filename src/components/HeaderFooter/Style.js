import { css } from "@emotion/react";

export const SLayout = css`
    position: sticky;
    z-index: 100;
    top: 0;
    padding: 0px 20px;
    width: 100%;
    height: 51px;
    background-color: rgb(6,180,149);
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    height: 100%;
    max-width: 375px;
`;

export const SBtn = css`
    height: 100%;
    padding: 14px 5px;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 17px;
    cursor: pointer;
    text-decoration: none;
    border-bottom: none;
`;


export const STimeLineActive =(pathname)=> css`
    font-weight: ${pathname ==="/timeline" ? "800" : "normal"};
    border-bottom: ${pathname ==="/timeline" ? "3px solid white" : "none"};
`;
export const SFeedActive =(pathname)=> css`
    font-weight: ${pathname ==="/feed" ? "800" : "normal"};
    border-bottom: ${pathname ==="/feed" ? "3px solid white" : "none"};
`;
export const SReviewActive =(pathname)=> css`
    font-weight: ${pathname ==="/review" ? "800" : "normal"};
    border-bottom: ${pathname ==="/review" ? "3px solid white" : "none"};
`;

export const SOrderActive =(pathname)=> css`
    font-weight: ${pathname ==="/order" ? "800" : "normal"};
    border-bottom: ${pathname ==="/order" ? "3px solid white" : "none"};
`;

export const SSaveActive =(pathname)=> css`
    font-weight: ${pathname ==="/save" ? "800" : "normal"};
    border-bottom: ${pathname ==="/save" ? "3px solid white" : "none"};
`;
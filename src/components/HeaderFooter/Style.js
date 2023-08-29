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
    color: rgba(255,255,255,.7);
    font-size: 17px;
    cursor: pointer;
    text-decoration: none;
    border-bottom: none;
`;


export const STimeLineActive =(pathname)=> css`
    font-weight: ${pathname.startsWith("/timeline") ? "800" : "normal"};
    border-bottom: ${pathname.startsWith("/timeline") ? "3px solid white" : "none"};
    color: ${pathname.startsWith("/timeline") ? "white" : "rgba(255,255,255,.7)"};
`;
export const SFeedActive =(pathname)=> css`
    font-weight: ${pathname.startsWith("/feed") ? "800" : "normal"};
    border-bottom: ${pathname.startsWith("/feed") ? "3px solid white" : "none"};
    color: ${pathname.startsWith("/feed") ? "white" : "rgba(255,255,255,.7)"};
`;
export const SReviewActive =(pathname)=> css`
    font-weight: ${pathname.startsWith("/review") ? "800" : "normal"};
    border-bottom: ${pathname.startsWith("/review") ? "3px solid white" : "none"};
    color: ${pathname.startsWith("/review") ? "white" : "rgba(255,255,255,.7)"};
`;

export const SOrderActive =(pathname)=> css`
    font-weight: ${pathname.startsWith("/order") ? "800" : "normal"};
    border-bottom: ${pathname.startsWith("/order") ? "3px solid white" : "none"};
    color: ${pathname.startsWith("/order") ? "white" : "rgba(255,255,255,.7)"};
`;

export const SSaveActive =(pathname)=> css`
    font-weight: ${pathname.startsWith("/save") ? "800" : "normal"};
    border-bottom: ${pathname.startsWith("/save") ? "3px solid white" : "none"};
    color: ${pathname.startsWith("/save") ? "white" : "rgba(255,255,255,.7)"};
`;
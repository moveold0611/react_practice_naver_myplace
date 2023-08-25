import { css } from "@emotion/react";

export const SContainer = css`
    display: flex;
    justify-content: center;
    padding: 25px 20px;
    height: 490px;
`;
export const SContentBox = css`
    width: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 34px 30px 40px 30px;
    border-radius: 15px;
    background-image: linear-gradient(to bottom right, rgb(85,171,171), rgb(111,194,172));
`;

export const SIconContainer = css`
    width: 19px;
    height: 20px;
    margin: 0px auto;
    margin-bottom: 15px;
`;
export const SIcon = css`
    width: 19px;
    height: 19px;
    color: white;
`;
export const SImgContainer = css`
display: flex;
justify-content: center;
    margin-top: 27px;
    height: 155px;
`; 

export const SImg = css`
    width: 235px;
    height: 155px;
`;
export const SBtnContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 22px;
    height: 46px;
`;
export const SBtn = css`
    width: 141px;
    background-color: transparent;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 22px;
    color: white;
    font-size: 16px;
    cursor: pointer;
`;
export const SLargeTextContainer = css`
    display: block;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 53px;
    color: white;
    font-size: 20px;
    line-height: 22px;
`;

export const SStrongText = css`
    font-weight: 900;
`;

export const SSmallTextContainer = css`
    color: #bbedee;
    font-size: 15px;
    text-align: center;
`;
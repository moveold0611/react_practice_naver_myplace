import { css } from "@emotion/react";

export const GSCommon = css`
    * {
        box-sizing: border-box;
        letter-spacing: -1px;
    }
    body::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    body::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #c4c6c8;
    }

    body::-webkit-scrollbar-track-piece {
    background-color: rgba(var(--place-color-bg1),1);
    }
`;
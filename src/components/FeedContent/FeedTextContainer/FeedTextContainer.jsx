import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function FeedTextContainer({ text }) {
 

    return (
        <div css={S.SFeedTextContainer}>
            <button css={S.SBtn}>
                <a css={S.SText}>{text}
                </a>
            </button>
        </div>
    );
}

export default FeedTextContainer;
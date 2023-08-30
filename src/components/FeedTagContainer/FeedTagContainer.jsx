/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function FeedTagContainer({ icon, text, count }) {
    return (
        <div css={S.SFeedTagContainer}>
            <div>
                <span css={S.SSpanBox}>
                    <img css={S.SFaceImg} src={icon}/>
                    <p css={S.SSpanText}>{text}</p>
                </span>
                <span css={S.SSpanBox}>
                    <p css={S.SSpanText}>{count}
                    </p>
                    </span>
            </div>
        </div>
    );
}

export default FeedTagContainer;
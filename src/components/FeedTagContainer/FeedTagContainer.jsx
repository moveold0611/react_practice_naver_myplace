/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function FeedTagContainer(props) {
    return (
        <div css={S.SFeedTagContainer}>
            <div>
                <span css={S.SSpanBox}>
                    <img css={S.SFaceImg} src="face_savoring_food20220119222022.png"/>
                    <p css={S.SSpanText}>음식이 맛있어요</p>
                </span>
                <span css={S.SSpanBox}>
                    <p css={S.SSpanText}>+4
                    </p>
                    </span>
            </div>
        </div>
    );
}

export default FeedTagContainer;
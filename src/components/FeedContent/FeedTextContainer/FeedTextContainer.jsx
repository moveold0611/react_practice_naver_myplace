import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"


function FeedTextContainer(props) {
    return (
        <div css={S.SFeedTextContainer}>
            <button css={S.SBtn}>
                <a css={S.SText}>술이 저절로 땡기는 맛 ㅎㅎ 양념도 넘 맛있고 사장님 친절하셔서 좋았습니다 ~~^^ 또 올게요!
                </a>
            </button>
        </div>
    );
}

export default FeedTextContainer;
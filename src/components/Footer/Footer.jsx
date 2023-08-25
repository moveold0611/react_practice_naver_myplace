/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function Footer(props) {
    return (
        <div css={S.SContainer}>
            <div css={S.STop}>
                <button css={[S.SBtn, S.SBtnTextGray]}>로그인</button>
                <span css={S.SSpread} />
                <button css={[S.SBtn, S.SBtnTextGray]}>전체서비스</button>
            </div>
            <div css={S.SMiddle}>
                <button css={S.SBtn}>이용정책</button>
                <span css={S.SSpread} />
                <button css={S.SBtn}>MY플레이스 고객센터</button>
                <span css={S.SSpread} />
                <button css={S.SBtn}>신고센터</button>
                <span css={S.SSpread} />
                <button css={S.SBtn}>공지사항</button>
            </div>
            <div css={S.SBottom}>
                <button css={S.SBtn}>
                ⓒ NAVER Corp.
                </button>
            </div>
        </div>
    );
}

export default Footer;
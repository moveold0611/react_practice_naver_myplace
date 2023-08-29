/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { Link, useLocation } from "react-router-dom";

function HeaderFooter(props) {
    const { pathname } = useLocation();

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <Link to="/feed" css={[S.SBtn, S.SFeedActive(pathname)]}>피드</Link>
                <Link to="/timeline" css={[S.SBtn, S.STimeLineActive(pathname)]}>타임라인</Link>
                <Link to="/review" css={[S.SBtn, S.SReviewActive(pathname)]}>리뷰</Link>
                <Link to="/order" css={[S.SBtn, S.SOrderActive(pathname)]}>예약·주문</Link>
                <Link to="/save" css={[S.SBtn, S.SSaveActive(pathname)]}>저장</Link>
            </div>
        </div>
    );
}

export default HeaderFooter;

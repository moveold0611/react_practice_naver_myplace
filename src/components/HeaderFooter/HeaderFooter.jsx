/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { categorySelectState } from "../../store/Store";
function HeaderFooter(props) {
    const { pathname } = useLocation();
    const [ categorySelect, setCategorySelect ] = useRecoilState(categorySelectState);

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <Link to="/feed/all" onClick={()=>setCategorySelect("all")} css={[S.SBtn, S.SFeedActive(pathname.startsWith("/feed"))]}>피드</Link>
                <Link to="/timeline" css={[S.SBtn, S.STimeLineActive(pathname.startsWith("/timeline"))]}>타임라인</Link>
                <Link to="/review" css={[S.SBtn, S.SReviewActive(pathname.startsWith("/review"))]}>리뷰</Link>
                <Link to="/order" css={[S.SBtn, S.SOrderActive(pathname.startsWith("/order"))]}>예약·주문</Link>
                <Link to="/save" css={[S.SBtn, S.SSaveActive(pathname.startsWith("/save"))]}>저장</Link>
            </div>
        </div>
    );
}

export default HeaderFooter;

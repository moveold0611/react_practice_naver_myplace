/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { IoMdFlag } from "react-icons/io"
import { useLocation } from "react-router-dom";

function TimeLine(props) {
    const location = useLocation();
    console.log(location);
    return (
        <div css={S.SContainer}>
            <div css={S.SContentBox}>
                <div css={S.SIconContainer}>
                    <IoMdFlag css={S.SIcon}/>
                </div>
                <div css={S.SLargeTextContainer}>
                    <strong css={S.SStrongText}>영수증/카드내역 인증, 예약, 주문</strong>한<br/>
                    장소가 나의 기록이 됩니다.
                </div>
                <div css={S.SSmallTextContainer}>방문했던 곳을 한 눈에 모아보세요.</div>
                <div css={S.SImgContainer}>
                    <img css={S.SImg} src="panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png"/>
                </div>
                <div css={S.SBtnContainer}>
                    <button css={S.SBtn}>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
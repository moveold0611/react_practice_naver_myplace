/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { IoMdFlag } from "react-icons/io";
import img from '../../assets/panel_img_review_20221202.87ca2c0d90f42473c28ef6cff083836e.png';

function Review(props) {
    return (
        <div css={S.SContainer}>
            <div css={S.SContentBox}>
                <div css={S.SIconContainer}>
                    <IoMdFlag css={S.SIcon}/>
                </div>
                <div css={S.SLargeTextContainer}>
                    정성스레 작성한
                    <strong css={S.SStrongText}> 리뷰</strong><br/>
                    내 리뷰를 모아 만든 <strong css={S.SStrongText}>테마리스트</strong>
                </div>
                <div css={S.SSmallTextContainer}>나의 발자취를 소중한 기록으로 남겨보세요.</div>
                <div css={S.SImgContainer}>
                    <img css={S.SImg} src={img}/>
                </div>
                <div css={S.SBtnContainer}>
                    <button css={S.SBtn}>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default Review;
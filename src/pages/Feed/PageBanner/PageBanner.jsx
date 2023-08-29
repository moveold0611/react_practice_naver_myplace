/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { AiOutlineRight } from "react-icons/ai"

function PageBanner(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <button css={S.SBtnBox}>
                    <div css={S.SBannerIconBox}>
                        <img css={S.SBannerIcon} src="face_savoring_food20220119222022.png" />
                    </div>
                    <div css={S.SBannerTextBox}>
                        <span css={S.SBannerTextTop}> 지금 로그인하고</span>
                        <div css={S.SBannerTextBottomBox}>
                            <span css={S.SBannerColorTextBottom}>내게 맞는 피드</span>
                            <span>로 바꿔볼까요?</span>
                        </div>
                    </div>
                    <div css={S.SBannerRigthIconBox}>
                        <AiOutlineRight />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default PageBanner;
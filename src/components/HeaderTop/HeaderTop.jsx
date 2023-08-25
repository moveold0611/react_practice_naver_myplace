/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { HiOutlineMenu } from "react-icons/hi"
import { RiCoupon2Line } from "react-icons/ri"
import { SiNaver } from "react-icons/si"

function HeaderTop(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainerLeft}>
                <button css={[S.SBtn, S.SLogoButtonBox]}>
                    <div css={S.SNaverBtnBox}>
                        <SiNaver css={S.SLogoButton}/>
                    </div>
                </button>
                <button css={[S.SBtn, S.SMyPlaceButton]}>MY플레이스</button>
            </div>
            <button css={[S.SCouponButtonContainer, S.SBtn]}>
                <RiCoupon2Line />
            </button>
            <button css={[S.SMenuContainer, S.SBtn]}>
                <div css={S.SMenuBtnBox}>
                    <HiOutlineMenu css={S.SMenuButton}/>
                </div>
            </button>
        </div>
    );
}

export default HeaderTop;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { IoMdFlag } from "react-icons/io";
import img from '../../assets/panel_img_bookmark.4939778b9d2b5079407ea43536a05566.png';

function Save(props) {
    return (
        <div>
            <div css={S.SContainer}>
            <div css={S.SContentBox}>
                <div css={S.SIconContainer}>
                    <IoMdFlag css={S.SIcon}/>
                </div>
                <div css={S.SLargeTextContainer}>
                    가고싶은 맛집, 카페 저장하고
                    <br />
                    나의 <strong css={S.SStrongText}>리스트</strong>를 만들어 보세요
                </div>
                <div css={S.SSmallTextContainer}>여행 코스도 계획하기도 굳~</div>
                <div css={S.SImgContainer}>
                    <img css={S.SImg} src={img}/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Save;
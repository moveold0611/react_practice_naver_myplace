/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { BiSolidLocationPlus } from "react-icons/bi"

function FeedImgContainer(props) {
    return (
        <div css={S.SFeedImgContainer}>
            <button css={S.SFeedImgBtnBox}>
                <div css={S.SContainer}>
                    <div css={S.SMainImgBoxfirst}>
                        <img css={S.SMainImg} src="IMG_8875.jpeg"/>
                    </div>
                    <div css={S.SMainImgBoxNext}>
                        <div css={S.SMainImgNext("top-rigth")}>
                            <img src="icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png"/>
                        </div>
                        <div css={S.SMainImgNext("bottom-rigth")}>
                            <img src="panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png"/>
                        </div>
                    </div>
                </div>
                <div css={S.SImgLocationContainer}>
                    <div css={S.SImgLocationBox}>
                        <BiSolidLocationPlus css={S.SLocationIcon}/>
                        <span css={S.SLocationText}>부산광역시 해운대구</span>
                    </div>
                </div>
            </button>

        </div>
    );
}
export default FeedImgContainer;
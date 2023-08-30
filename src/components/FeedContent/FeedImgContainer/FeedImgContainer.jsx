/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { BiSolidLocationPlus } from "react-icons/bi"

function FeedImgContainer({ imgs, location }) {
    return (
        <div css={S.SFeedImgContainer}>
            <button css={S.SFeedImgBtnBox}>
                <div css={S.SContainer}>
                    <div css={S.SMainImgBoxfirst}>
                        <img css={S.SMainImg} src={imgs[0]}/>
                    </div>
                    <div css={S.SMainImgBoxNext}>
                        <div css={S.SMainImgNext("top-rigth")}>
                            <img src={imgs[1]}/>
                        </div>
                        <div css={S.SMainImgNext("bottom-rigth")}>
                            <img src={imgs[2]}/>
                        </div>
                    </div>
                </div>
                <div css={S.SImgLocationContainer}>
                    <div css={S.SImgLocationBox}>
                        <BiSolidLocationPlus css={S.SLocationIcon}/>
                        <span css={S.SLocationText}>{location}</span>
                    </div>
                </div>
            </button>

        </div>
    );
}
export default FeedImgContainer;
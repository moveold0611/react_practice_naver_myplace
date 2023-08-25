/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { AiOutlineRight } from "react-icons/ai"
import { BiSolidPencil } from "react-icons/bi"
import { BsCheck2Circle } from "react-icons/bs"


function HeaderMiddle(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <button css={S.SLoginBtnContainer}>
                        <div css={S.SProfileImgContainer}>
                            <div css={S.SImgOutLine}>
                                <div css={S.SImgInLine}>
                                    <img src="icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png" css={S.SProfileImg}/>
                                </div>
                            </div>
                        </div>
                        <div css={S.SLoginTextContainer}>
                            <span css={S.SLoginText}>로그인하기</span>
                            <AiOutlineRight css={S.SRightIcon}/>
                        </div>
                </button>
                <div css={S.SReviewNMissionContainer}>
                    <div css={S.SReviewContainer}>
                        <button css={[S.SBtn]}>
                            <BiSolidPencil css={S.SReviewBtnIcon} />
                            리뷰 쓰기
                        </button>
                    </div>
                    <div css={S.SMissionContainer}>
                        <button css={[S.SBtn]}>
                            <BsCheck2Circle css={S.SMissionBtnIcon}/>
                            미션
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMiddle;

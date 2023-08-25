/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { VscKebabVertical } from "react-icons/vsc"
import React from 'react';

function FeedUserInfoContainer(props) {
    return (
        <div css={S.SFeedUserInfoContainer}>
                    <button css={[S.SBtn, S.SFeedUserInfoLeftBtn]}>
                        <div css={S.SUserProfileImgContainer}>
                            <div css={S.SUserProfileImgOutlineBox}>
                                <div css={S.SUserProfileImgOutline}>
                                    <img css={S.SUserProfileOutlineImg} src="sharon_profile_border.png"/>
                                </div>
                                <div css={S.SUserProfileImgBox}>
                                    <img css={S.SUserProfileImg} src="icon_profile_default.cf1f777d594520630ff249eb31ab38c2Small.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div css={S.SProfileTextContainer}>
                            <div css={S.SUsername}>룰룰류</div>
                            <div css={S.SReviewNFollowerTextBox}>
                                <span>사진리뷰 39</span>
                                <span> · 팔로워 0</span>
                            </div>
                        </div>
                    </button>
                    <button css={[S.SBtn, S.SFollowBtn]}>팔로우</button>
                    <div css={S.SProfileMenuBtnContainer}>
                        <div css={S.SProfileMenuBtnBox}>
                            <button css={[S.SBtn, S.SProfileMenuBtn]}>
                                <VscKebabVertical css={S.SProfileMenuBtnIcon}/>
                            </button>
                        </div>
                    </div>
                </div>  
    );
}
export default FeedUserInfoContainer;
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { VscKebabVertical } from "react-icons/vsc"
import React from 'react';
import { useRecoilState } from "recoil";



function FeedUserInfoContainer({ username, profileImg, profileoutline, reviewCount, follower }) {

    return (
        <div css={S.SFeedUserInfoContainer}>
                    <button css={[S.SBtn, S.SFeedUserInfoLeftBtn]}>
                        <div css={S.SUserProfileImgContainer}>
                            <div css={S.SUserProfileImgOutlineBox}>
                                <div css={S.SUserProfileImgOutline}>
                                    <img css={S.SUserProfileOutlineImg} src={profileoutline}/>
                                </div>
                                <div css={S.SUserProfileImgBox}>
                                    <img css={S.SUserProfileImg} src={profileImg}/>
                                </div>
                            </div>
                        </div>
                        <div css={S.SProfileTextContainer}>
                            <div css={S.SUsername}>{username}</div>
                            <div css={S.SReviewNFollowerTextBox}>
                                <span>사진리뷰 {reviewCount}</span>
                                <span> · 팔로워 {follower}</span>
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
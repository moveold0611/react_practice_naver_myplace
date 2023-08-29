/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { MdLocationSearching } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { Link, useLocation, useNavigate } from "react-router-dom";

function FollowNLocation(props) {
    const { pathname } = useLocation();

    return (
        <div css={S.SFollowNLocationContainer}>
            <div css={S.SFollowNLocationPaddingBox}>
                <div css={S.SFollowNLocationFullBox}>
                    <div css={S.SFollowNLocationBox}>
                        <div css={S.SFollowRouterBtnContainer}>
                            <div css={S.SFollowRouterBtnList}>
                                <div css={S.SFollowBtnBox("6px 0px 6px 20px")}>
                                    <Link to="/feed/all" css={[S.SFollowBtn, S.SSelected(pathname=="/feed/all")]}>
                                        전체
                                    </Link>
                                </div>
                                <div css={S.SFollowBtnBox("6px 0px 6px 8px")}>
                                    <Link to="/feed/following" css={[S.SFollowBtn, S.SSelected(pathname=="/feed/following")]}>
                                        팔로잉
                                    </Link>
                                </div>
                                <div css={S.SFollowBtnBox("6px 20px 6px 8px")}>
                                    <button css={S.SFollowBtn}>
                                        <AiOutlinePlus css={S.SPlusIcon}/>
                                        관심지역
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div css={S.SMyLocation}>
                            <div css={S.SBeforeLine} />
                            <button css={S.SMyLocationBtn}>
                                <MdLocationSearching css={S.SMyLocationBtnIcon}/>
                                현위치
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowNLocation;
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { AiOutlineRight, AiOutlineStar } from "react-icons/ai"

function FeedStoreInfoContainer(props) {
    return (
        <div css={S.SFeedStoreInfoContainer}>
            <div css={S.SFeedStoreInfoBox}>
                <div css={S.SFeedStoreInfoPositioning}>
                    <div css={S.SStoreNameNLocationBox}>
                        <div css={S.SStoreNameBox}>
                            <button css={S.SStoreNameNLocationBtn}>
                                <span css={S.SStoreBtnText}>
                                    음식점
                                </span>
                                <AiOutlineRight css={S.SStoreBtnIcon}/>
                            </button>
                        </div>
                        <div css={S.SStoreLocationBox}>
                            <span css={S.SLocationText}>민트초코 · </span>
                            <span css={S.SLocationText}>해운대구 베스킨라빈스 아무데나</span>
                        </div>
                    </div>
                    <div css={S.SBookMarkBox}>
                        <button css={S.SBookmartBtnBox}>
                        <AiOutlineStar css={S.SBookmarkStartIcon}/>
                        <span css={S.SBookmarkSaveText}>저장</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedStoreInfoContainer;
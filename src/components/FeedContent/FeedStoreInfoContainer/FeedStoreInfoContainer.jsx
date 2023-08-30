/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { AiOutlineRight, AiOutlineStar } from "react-icons/ai"

function FeedStoreInfoContainer({ name, category, location }) {
    return (
        <div css={S.SFeedStoreInfoContainer}>
            <div css={S.SFeedStoreInfoBox}>
                <div css={S.SFeedStoreInfoPositioning}>
                    <div css={S.SStoreNameNLocationBox}>
                        <div css={S.SStoreNameBox}>
                            <button css={S.SStoreNameNLocationBtn}>
                                <span css={S.SStoreBtnText}>
                                    {name}
                                </span>
                                <AiOutlineRight css={S.SStoreBtnIcon}/>
                            </button>
                        </div>
                        <div css={S.SStoreLocationBox}>
                            <span css={S.SLocationText}>{category} · </span>
                            <span css={S.SLocationText}>{location}</span>
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
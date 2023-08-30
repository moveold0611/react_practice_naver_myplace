/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { FiSmile } from "react-icons/fi"
function FeedSetCommentContainer({date}) {
    return (
        <div css={S.SFeedSetCommentContainer}>
            <div css={S.SLeftBox}>
                <button css={S.SLeftBtn}>
                    <FiSmile css={S.SLeftIcon}/>
                    <p css={S.SLeftBtnText}>
                        반응 남기기
                     </p>
                </button>
            </div>
            <div css={S.SRightBox}>
                <span>
                    {date}
                </span>   
            </div>
        </div>
    );
}

export default FeedSetCommentContainer;
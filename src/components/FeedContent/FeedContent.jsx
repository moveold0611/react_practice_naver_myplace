/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import FeedUserInfoContainer from "./FeedUserInfoContainer/FeedUserInfoContainer";
import FeedImgContainer from "./FeedImgContainer/FeedImgContainer";
import FeedTextContainer from "./FeedTextContainer/FeedTextContainer";
import FeedTagContainer from "../FeedTagContainer/FeedTagContainer";
import FeedSetCommentContainer from "./FeedSetCommentContainer/FeedSetCommentContainer";

function FeedContent(props) {
    return (
        <li css={S.SLayout}>
            <div css={S.SContainer}>
                <FeedUserInfoContainer />
                <FeedImgContainer />
                <FeedTextContainer />
                <FeedTagContainer />
                <FeedSetCommentContainer />
                <div css={S.SFeedStoreInfoContainer}></div>
            </div>
            <div css={S.SContainer}>
                <FeedUserInfoContainer />
                <FeedImgContainer />
                <FeedTextContainer />
                <FeedTagContainer />
                <FeedSetCommentContainer />
                <div css={S.SFeedStoreInfoContainer}></div>
            </div>
        </li>
    );
}

export default FeedContent;
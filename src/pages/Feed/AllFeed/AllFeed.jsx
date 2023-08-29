/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import FollowNLocation from "../FollowNLocation/FollowNLocation";
import Category from "../Category/Category";
import FeedContent from "../../../components/FeedContent/FeedContent";
import PageBanner from "../PageBanner/PageBanner";

function AllFeed(props) {
    return (
        <div css={S.SLayout}>
            <FollowNLocation />
            <Category />
            <FeedContent />
            <PageBanner />
        </div>
    );
}

export default AllFeed;
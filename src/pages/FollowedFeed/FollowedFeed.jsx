/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import FeedContent from "../../components/FeedContent/FeedContent";
import FollowNLocation from "../Feed/FollowNLocation/FollowNLocation";
import Category from "../Feed/Category/Category";
import PageBanner from "../Feed/PageBanner/PageBanner";
import React from 'react';

function FollowedFeed({ feedContentData }) {
    return (
        <div css={S.SLayout}>
            <FollowNLocation/>
            <Category />
            <FeedContent feedContentData={feedContentData}/>
            <PageBanner />
        </div>
    );
}

export default FollowedFeed;
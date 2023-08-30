/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import FollowNLocation from "../Feed/FollowNLocation/FollowNLocation";
import Category from "../Feed/Category/Category";
import FeedContent from "../../components/FeedContent/FeedContent";
import PageBanner from "../Feed/PageBanner/PageBanner";

function AllFeed({ feedContentData}) {

    

    return (
        <div css={S.SLayout}>
            <FollowNLocation/>
            <Category />
            <FeedContent feedContentData={feedContentData}/>
            <PageBanner />
        </div>
    );
}

export default AllFeed;
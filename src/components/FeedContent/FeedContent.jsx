/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import FeedUserInfoContainer from "./FeedUserInfoContainer/FeedUserInfoContainer";
import FeedImgContainer from "./FeedImgContainer/FeedImgContainer";
import FeedTextContainer from "./FeedTextContainer/FeedTextContainer";
import FeedTagContainer from "../FeedTagContainer/FeedTagContainer";
import FeedSetCommentContainer from "./FeedSetCommentContainer/FeedSetCommentContainer";
import FeedStoreInfoContainer from "./FeedStoreInfoContainer/FeedStoreInfoContainer";
import { useRecoilState } from "recoil";
import { categorySelectState } from "../../store/Store";

function FeedContent({feedContentData}) {
    const [ categorySelect, setCategorySelect ] = useRecoilState(categorySelectState);


    return(
        <>
        {feedContentData.map(items => {
            if(categorySelect === items.category || categorySelect === "all") {
        return (
            <li css={S.SLayout} key={items.id}>
                <div css={S.SContainer}>
                    <FeedUserInfoContainer username={items.username} profileImg={items.profileImg} profileoutline={items.profileOutlineImg} reviewCount={items.reviewCount} follower={items.follower}/>
                    <FeedImgContainer imgs={items.feedImg} location={items.feedLocation}/>
                    <FeedTextContainer text={items.feedText}/>
                    <FeedTagContainer icon={items.recommandIcon} text={items.recommandText} count={items.recommandCount}/>
                    <FeedSetCommentContainer date={items.visitDate}/>
                    <FeedStoreInfoContainer name={items.storeName} category={items.storeCategory} location={items.storeLocation}/>
                </div>
            </li>
            );}
        })}
        </>
    )
}

export default FeedContent;
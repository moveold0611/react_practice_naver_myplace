/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import FollowedFeed from "../FollowedFeed/FollowedFeed";
import AllFeed from "../AllFeed/AllFeed";


function Feed({ feedContentData, followingFeedContentData }) {

    return (
        <Routes>
            <Route path="" element={<AllFeed feedContentData={feedContentData}/>} />
            <Route path="/all" element={<AllFeed feedContentData={feedContentData}/>}/>
            <Route path="/following" element={<FollowedFeed feedContentData={followingFeedContentData}/>}/>
        </Routes>
    );
}

export default Feed;
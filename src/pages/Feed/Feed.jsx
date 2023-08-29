/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import FollowedFeed from "../FollowedFeed/FollowedFeed";
import AllFeed from "./AllFeed/AllFeed";


function Feed(props) {
    return (
        <Routes>
            <Route path="" element={<AllFeed/>} />
            <Route path="/all" element={<AllFeed/>}/>
            <Route path="/following" element={<FollowedFeed/>}/>
        </Routes>
    );
}

export default Feed;
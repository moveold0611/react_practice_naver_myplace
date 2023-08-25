/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import FeedContent from "../../components/FeedContent/FeedContent";

function Feed(props) {
    return (
        <div css={S.SLayout}>
            <FeedContent />
        </div>
    );
}

export default Feed;
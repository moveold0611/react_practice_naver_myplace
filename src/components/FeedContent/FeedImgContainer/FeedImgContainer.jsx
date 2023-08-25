/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function FeedImgContainer(props) {
    return (
        <div css={S.SFeedImgContainer}>
            <button css={S.SFeedImgBtnBox}>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>


                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    
                </div>
            </button>
        </div>
    );
}
export default FeedImgContainer;
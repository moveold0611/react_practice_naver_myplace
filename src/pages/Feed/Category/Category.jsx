/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai"
import { useState } from "react";
import { scrollCategoryState } from "../../../store/Store";
import Categorys from "./Categorys/Categorys";

function Category(props) {
    const [ scrollCategory, setScrollCategory ] = useState(scrollCategoryState);

    const handleScrollMover = () => {
        setScrollCategory(!scrollCategory)
    }
    
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SCategoryContainer}>
                    <div css={S.SCategoryFanContainer}>
                        <div css={S.SCategoryFanBox}>
                            <button onClick={handleScrollMover} css={S.SCategoryMoveFanBtnBox("left")}>
                                <AiOutlineLeft css={S.SCategoryMoveFanBtn}/>
                            </button>
                            <button onClick={handleScrollMover} css={S.SCategoryMoveFanBtnBox("right")}>
                                <AiOutlineRight css={S.SCategoryMoveFanBtn}/>
                            </button>
                            <div css={S.SCategoryBtnContainer(scrollCategory)}>
                                <Categorys />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai"
import { useRef, useState } from "react";
import Categorys from "./Categorys/Categorys";

function Category(props) {
    const [ num, setNum ] = useState(0);

    const handleScrollPlus = () => {
        if(num < 0) {
            setNum(num + 360);
        }
    }

    const handleScrollMinus = () => {
        if(num > -1080) {
            setNum(num - 360);
        }
    }

    let scrollPosition = parseFloat(num) + "px";

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SCategoryContainer}>
                    <div css={S.SCategoryPanContainer}>
                        <div css={S.SCategoryPanBox} onTouchStart={()=>console.log(1)} onTouchMove={()=>console.log(2)} onTouchEnd={()=>console.log(3)}>
                            <button onClick={handleScrollPlus} css={S.SCategoryMovePanBtnBox("left")}>
                                <AiOutlineLeft css={S.SCategoryMovePanBtn}/>
                            </button>
                            <button onClick={handleScrollMinus} css={S.SCategoryMovePanBtnBox("right")}>
                                <AiOutlineRight css={S.SCategoryMovePanBtn}/>
                            </button>
                            <div css={S.SCategoryBtnContainer(scrollPosition)}>
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
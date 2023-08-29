/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React, { useState } from 'react';
import { selectCategoryState } from "../../../../store/Store";

function Categorys(props) {

    const categorys = [
        {
            key: 1,
            name: "한식",
            padding: S.SFirstBoxPadding
        },
        {
            key: 2,
            name: "자연명소",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 3,
            name: "카페",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 4,
            name: "물놀이",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 5,
            name: "양식",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 6,
            name: "테마파크",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 7,
            name: "일식",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 8,
            name: "역사유적",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 9,
            name: "피크닉",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 10,
            name: "분식/치킨",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 11,
            name: "체험관광",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 12,
            name: "중식",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 13,
            name: "레저·액티비티",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 14,
            name: "아시아/퓨전 음식",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 15,
            name: "클래스·소품",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 16,
            name: "뷔페/레스토랑",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 17,
            name: "아이와 함께",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 18,
            name: "등산·트레킹",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 19,
            name: "문화예술",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 20,
            name: "낚시",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 21,
            name: "캠핑",
            padding: S.SMiddleBoxPadding
        },
        {
            key: 22,
            name: "숙박",
            padding: S.SLastBoxPadding
        },
    ]

    const [ selectCategory, setSelectCategory ] = useState(selectCategoryState);
    const handleSelectCategory = (key) => {
        categorys.map(items => {
            if(items.key === key) {
                setSelectCategory(selectCategory = items.key)
            }

        })
    }

    return (
        <>
            {categorys.map(items => {
                const isSelected = items.key;
                return (
                    <span key={items.key} css={[S.SCategoryBtnBox, items.padding]}>
                        <button onClick={()=>handleSelectCategory(items.key)} css={S.SCategoryBtn(isSelected===selectCategory)}>{items.name}</button>
                    </span>
                );
            })}
        </>
    )
}

export default Categorys;
import React from 'react';
import Feed from '../pages/Feed/Feed';
import img from '../assets/99560191-15EE-49CA-A339-CCAB881444E6.jpeg';
import imga from '../assets/icon_profile_default.cf1f777d594520630ff249eb31ab38c2Small.png';
import imgb from '../assets/IMG_8875.jpeg';
import imgc from '../assets/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png';
import imgd from '../assets/panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png';
import imge from '../assets/logo512.png';
import imgf from '../assets/2020103023413346639.jpg';
import imgg from '../assets/face_savoring_food20220119222022.png';
import imgh from '../assets/sharon_profile_border.png';
import { useRecoilState } from 'recoil';
import { categorySelectState } from '../store/Store'; 

function TestFeedData(props) {
    const [ categorySelect, setCategorySelect ] = useRecoilState(categorySelectState);
    window.onload = () => {
        setCategorySelect("all")
    }

    const feedContentData = [
        {
        id: 1,
        username: "룰룰류",
        profileImg: imga,
        profileOutlineImg: imgh,
        reviewCount: 39,
        follower: 0,
        feedImg: [imgb, imgc, imgd],
        feedLocation: "부산광역시 해운대구",
        feedText: "술이 저절로 땡기는 맛 ㅎㅎ 양념도 넘 맛있고 사장님 친절하셔서 좋았습니다 ~~^^ 또 올게요!",
        recommandIcon: imgg,
        recommandText: "음식이 맛있어요",
        recommandCount: "+4",
        visitDate: "8.19 토 방문",
        storeName: "음식점",
        storeCategory: "민트초코",
        storeLocation: "해운대구 베스킨라빈스 아무데나",
        category : "한식"
    },  
    {
        id: 2,
        username: "asdf",
        profileImg: imga,
        profileOutlineImg: imgh,
        reviewCount: 3,
        follower: 6,
        feedImg: [img, imga, imgd],
        feedLocation: "부산광역시 사하구",
        feedText: "잘먹었습니다",
        recommandIcon: imgg,
        recommandText: "양이 많아요",
        recommandCount: "+9",
        visitDate: "8.30 수 방문",
        storeName: "식당",
        storeCategory: "돼지국밥",
        storeLocation: "사하구",
        category : "자연명소"
    },
    {   id: 3,
        username: "1q2w3e4r!@",
        profileImg: imge,
        profileOutlineImg: imgh,
        reviewCount: 3,
        follower: 6,
        feedImg: [imgf, imgf, imgf],
        feedLocation: "부산광역시 해운대구 좌동",
        feedText: "민트초코",
        recommandIcon: imgg,
        recommandText: "맛있어요",
        recommandCount: "+999",
        visitDate: "8.31 목 방문",
        storeName: "베스킨라빈스",
        storeCategory: "아이스크림",
        storeLocation: "좌동",
        category : "카페"
    }
]

const followingFeedContentData = [
    {
    id: 1,
    username: "ㅇㅇㅇㅇ",
    profileImg: imga,
    profileOutlineImg: imgh,
    reviewCount: 39,
    follower: 0,
    feedImg: [imge, imge, imge],
    feedLocation: "서울특별시",
    feedText: "ㅁㄴㅇㅇ",
    recommandIcon: imgg,
    recommandText: "맛있이 음식어요",
    recommandCount: "+4",
    visitDate: "8.12 토 방문",
    storeName: "국밥집",
    storeCategory: "돼지국밥",
    storeLocation: "ㅁㄴㅇㅀ",
    category : "한식"
    },  
]
    return (
        <>
            <Feed feedContentData={feedContentData} followingFeedContentData={followingFeedContentData}/>
        </>
    );
}

export default TestFeedData;
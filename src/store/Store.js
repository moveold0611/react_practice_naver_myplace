import { atom } from "recoil";

export const scrollCategoryState = atom({
    key: "scrollCategory",
    default: false
});

export const selectCategoryState = atom({
    key: "selectCategory",
    default: 0
})

export const feedContentDataState = atom({
    key: "feedContentData",
    default: []
}); 

export const categorySelectState = atom({
    key: "categorySelect",
    default: "all"
}); 


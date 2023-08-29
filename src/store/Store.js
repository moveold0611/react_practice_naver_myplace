import { atom } from "recoil";

export const scrollCategoryState = atom({
    key: "scrollCategory",
    default: false
});

export const selectCategoryState = atom({
    key: "selectCategory",
    default: false
})
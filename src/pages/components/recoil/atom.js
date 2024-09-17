import { atom } from "recoil";

export const CommentsState = atom({
  key: "comments",
  default: [],
});

export const CommentsInputState = atom({
  key: "commentInput",
  default: "",
});

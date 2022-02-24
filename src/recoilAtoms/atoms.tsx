import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {},
});

export const companyUserState = atom({
  key: "companyUserState",
  default: {},
});

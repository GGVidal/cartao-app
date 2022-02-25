import { atom } from "recoil";
import { userProps, partnerProps } from "./types";

export const userState = atom({
  key: "userState",
  default: {} as userProps,
});

export const partnerUserState = atom({
  key: "companyUserState",
  default: {} as partnerProps,
});

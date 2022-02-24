import { atom } from "recoil";

interface userProps {
  email: string;
  user: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  complement: string;
}

export const userState = atom({
  key: "userState",
  default: {} as userProps,
});

export const companyUserState = atom({
  key: "companyUserState",
  default: {},
});

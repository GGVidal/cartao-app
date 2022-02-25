import { atom } from "recoil";

interface userProps {
  email: string;
  login: string;
  senha: string;
  firstName: string;
  lastName: string;
  logradouro: string;
  cidade: string;
  estado: string;
  CEP: string;
  country: string;
  complemento: string;
  numero: string;
  bairro: string;
  cpf: string;
  telefone: string;
}

export const userState = atom({
  key: "userState",
  default: {} as userProps,
});

export const companyUserState = atom({
  key: "companyUserState",
  default: {},
});

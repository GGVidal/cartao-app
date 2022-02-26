export interface userProps {
  CEP: string;
  email: string;
  login: string;
  senha: string;
  firstName: string;
  lastName: string;
  logradouro: string;
  cidade: string;
  estado: string;
  country: string;
  complemento: string;
  numero: string;
  bairro: string;
  cpf: string;
  telefone: string;
}

export interface partnerProps {
  nome_empresa: string;
  nome_resp: string;
  servicos: string;
  horario_funcionamento: string;
  cnpj: string;
  logradouro: string;
  cidade: string;
  estado: string;
  CEP: string;
  country: string;
  complemento: string;
  numero: string;
  bairro: string;
  telefone: string;
  email: string;
  login: string;
  senha: string;
}

export interface userLoggedProps {
  login: string;
  email: string;
  token: string;
  cpf: string;
  endereco_id: number;
  nome: string;
  num_registro: string;
  telefone: string;
  parceiro_id: number;
  beneficio_id: number;
  tipo_usuario_id: number;
}

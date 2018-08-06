import { Endereco } from './endereco.model';

export class Clientes {
  id: number;
  nome: string;
  email: string;
  cep: string;
  endereco: Endereco;
  telefone: string;
  dataCadastro: string;
  status: string;
}

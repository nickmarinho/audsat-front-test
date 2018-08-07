import { IsNumber, IsString } from 'class-validator';
import { Endereco } from './endereco.model';

export class Clientes {
  @IsNumber() public id?: number;
  @IsString() public nome?: string;
  @IsString() public email?: string;
  @IsString() public cep?: string;
  @IsString() public telefone?: string;
  @IsString() public dataCadastro?: string;
  @IsString() public status?: string;
  endereco?: Endereco;
}

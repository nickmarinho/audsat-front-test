import { IsString } from 'class-validator';

export class Endereco {
  @IsString() public cep?: string;
  @IsString() public logradouro?: string;
  @IsString() public complemento?: string;
  @IsString() public bairro?: string;
  @IsString() public localidade?: string;
  @IsString() public uf?: string;
  @IsString() public unidade?: string;
  @IsString() public ibge?: string;
  @IsString() public gia?: string;
}

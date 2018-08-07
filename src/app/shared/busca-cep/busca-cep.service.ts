import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco.model';

@Injectable()
export class BuscaCepService {
  constructor(private http: HttpClient) { }

  public consultarCep(cep) {
    const url_cep = `http://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<Endereco>(url_cep);
  }
}

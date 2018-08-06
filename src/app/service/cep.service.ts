import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../shared/models/endereco.model';

@Injectable()
export class CepService {
  constructor(private http: HttpClient) { }

  public consultaCep(cep) {
    return this.http.get<Endereco>(`http://viacep.com.br/ws/${cep}/json/`);
  }
}

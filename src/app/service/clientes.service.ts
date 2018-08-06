import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../shared/models/clientes.model';

@Injectable()
export class ClientesService {
  constructor(private http: HttpClient) { }

  public getClientes() {
    return this.http.get<Clientes[]>(`http://localhost:3000/clientes`);
  }

  public getClientesPage(page) {
    return this.http.get<Clientes[]>(`http://localhost:3000/clientes/page/${page}`);
  }

  public getCliente(clienteId) {
    return this.http.get<Clientes>(`http://localhost:3000/clientes/${clienteId}`);
  }

  public addCliente (cliente) {
    return this.http.post(`http://localhost:3000/clientes`, cliente);
  }

  public updateCliente (cliente) {
    return this.http.put(`http://localhost:3000/clientes/${cliente.id}`, cliente);
  }

  public delCliente(cliente) {
    cliente.status = 'inativo';
    return this.http.put(`http://localhost:3000/clientes/${cliente.id}`, cliente);
  }

}

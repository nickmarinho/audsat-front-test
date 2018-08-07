import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../shared/models/clientes.model';

@Injectable()
export class ClientesService {
  constructor(private http: HttpClient) { }

  public getClientes() {
    const url_get_clientes = `http://localhost:3000/clientes`;
    return this.http.get<Clientes[]>(url_get_clientes);
  }

  public getClientesPage(page) {
    const url_get_clientes_page = `http://localhost:3000/clientes/page/${page}`;
    return this.http.get<Clientes[]>(url_get_clientes_page);
  }

  public getCliente(clienteId) {
    const url_get_cliente = `http://localhost:3000/clientes/${clienteId}`;
    return this.http.get<Clientes>(url_get_cliente);
  }

  public addCliente (cliente) {
    const url_add_cliente = `http://localhost:3000/clientes`;
    return this.http.post(url_add_cliente, cliente);
  }

  public updateCliente (cliente) {
    const url_update_cliente = `http://localhost:3000/clientes/${cliente.id}`;
    return this.http.put(url_update_cliente, cliente);
  }

  public delCliente(cliente) {
    const url_del_cliente = `http://localhost:3000/clientes/${cliente.id}`;
    cliente.status = 'inativo';
    return this.http.put(url_del_cliente, cliente);
  }

  public filtrarCliente(cliente) {
    const url_filtrar_cliente = `http://localhost:3000/clientes/filtrar/nome/${cliente.nome}/email/${cliente.email}/cep/${cliente.cep}`;

    if (cliente.nome === '') {
      cliente.nome = 'undefined';
    }
    if (cliente.email === '') {
      cliente.email = 'undefined';
    }
    if (cliente.cep === '') {
      cliente.cep = 'undefined';
    }

    return this.http.get<Clientes[]>(url_filtrar_cliente);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientesService {
  constructor(private http: HttpClient) { }

  public getClientes() {
    return this.http.get(`http://localhost:3000/clientes`);
  }

  public getCliente(userId) {
    return this.http.get(`http://localhost:3000/clientes/${userId}`);
  }

  public addCliente (user) {
    return this.http.post(`http://localhost:3000/clientes`, user);
  }

  public updateCliente (user) {
    return this.http.put(`http://localhost:3000/clientes//${user.id}`, user);
  }

  public delCliente(user) {
    user.status = 'i';

    return this.http.put(`http://localhost:3000/clientes//${user.id}`, user);
  }

}

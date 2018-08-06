import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../service/clientes.service';
import { Clientes } from '../../shared/models/clientes.model';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss']
})
export class ClientesListaComponent implements OnInit {
  clientes: Clientes[];
  fullClientes: Clientes[];
  page = 1;

  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.loadClientesPage(this.page);
    this.loadClientes();
  }

  public checkAtivo(cliente) {
    return cliente.status === 'ativo';
  }

  public loadClientesPage(page) {
    if (page !== undefined) {
      this.page = page;
    }

    this.clientesService.getClientesPage(this.page).subscribe(clientesList => {
        this.clientes = clientesList.filter(this.checkAtivo);
    });
  }

  public loadClientes() {
    this.clientesService.getClientes().subscribe(clientesList => {
        this.fullClientes = clientesList.filter(this.checkAtivo);
    });
  }

  public ficha(clienteId) {
    this.router.navigate(['clientes/clientes-ficha', clienteId]);
  }

  public filtrarClientes(e) {
    console.log('e', e);
  }

}

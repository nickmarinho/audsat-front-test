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
  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.loadClientes();
  }
  public loadClientes() {
    this.clientesService.getClientes().subscribe(
      data => {
        this.clientes = data;
      }
    );
  }
  public ficha(clienteId) {
    this.router.navigate(['clientes/clientes-ficha', clienteId]);
  }


}

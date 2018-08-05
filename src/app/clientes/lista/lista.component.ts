import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../service/clientes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  clientes: any;

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
        // this.clientes = JSON.stringify(data);
        this.clientes = data;
      }
    );
  }

  public ficha(clienteId) {
    this.router.navigate(['clientes/', clienteId]);
  }

}

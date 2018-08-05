import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../service/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss']
})
export class ClientesListaComponent implements OnInit {
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

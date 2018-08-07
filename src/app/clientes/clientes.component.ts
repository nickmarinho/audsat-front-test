import { Component, OnInit } from '@angular/core';
import { Clientes } from '../shared/models/clientes.model';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  totalCadastrados: number;
  clientes: Clientes[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.loadClientes();
  }

  public loadClientes() {
    this.clientesService.getClientes().subscribe(
      data => {
        this.clientes = data;
        this.totalCadastrados = data.length;
      }
    );
  }

}

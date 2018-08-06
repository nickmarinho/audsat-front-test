import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service';
import { Clientes } from '../shared/models/clientes.model';

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

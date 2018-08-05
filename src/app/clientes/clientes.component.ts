import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  totalCadastrados: number;
  clientes: any;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.loadClientes();
  }

  public loadClientes() {
    this.clientesService.getClientes().subscribe(
      data => {
        this.clientes = JSON.stringify(data);
        this.totalCadastrados = this.clientes.lentgh;
        console.log('this.clientes', this.clientes);
        console.log('this.totalCadastrados', this.totalCadastrados);
      }
    );
  }

}

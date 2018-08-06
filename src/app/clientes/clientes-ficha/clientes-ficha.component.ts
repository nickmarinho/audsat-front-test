import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ClientesService } from '../../service/clientes.service';
import { Clientes } from '../../shared/models/clientes.model';

@Component({
  selector: 'app-clientes-ficha',
  templateUrl: './clientes-ficha.component.html',
  styleUrls: ['./clientes-ficha.component.scss']
})
export class ClientesFichaComponent implements OnInit {
  cliente: Clientes;

  constructor(
    private router: Router,
    private clientesService: ClientesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params['id'] !== undefined) {
        this.loadCliente(params['id']);
      }
    });
  }

  public loadCliente(idCliente) {
    this.clientesService.getCliente(idCliente).subscribe(
      data => {
        this.cliente = data;
        this.cliente.dataCadastro = moment(this.cliente.dataCadastro).format('DD/MM/YYYY - HH:MM');

        this.clientesService.consultaCep(this.cliente.cep).subscribe(
          endereco => {
            this.cliente.endereco = endereco;
          }
        );
      }
    );
  }

  editar(idCliente) {
    this.router.navigate(['clientes/clientes-cadastro', idCliente]);
  }

  remover(cliente) {
    this.clientesService.delCliente(cliente);
    this.router.navigate(['clientes']);
  }

}

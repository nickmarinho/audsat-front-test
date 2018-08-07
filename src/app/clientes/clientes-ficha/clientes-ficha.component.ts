import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { BuscaCepService } from '../../shared/busca-cep/busca-cep.service';
import { Clientes } from '../../shared/models/clientes.model';
import { ClientesService } from '../clientes.service';

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
    private buscaCepService: BuscaCepService,
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

        this.buscaCepService.consultarCep(this.cliente.cep).subscribe(
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
    this.clientesService.delCliente(cliente).subscribe(data => {
      this.router.navigate(['clientes/clientes-lista']);
    });
  }

}

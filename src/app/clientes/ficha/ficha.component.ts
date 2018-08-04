import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../shared/models/clientes.model';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  cliente: Clientes;

  constructor() { }

  ngOnInit() {
    this.cliente = {
      nome: 'Luciano Marinho',
      email: 'nickmarinho@gmail.com',
      telefone: '+55 11 944 499 306',
      cep: '03938-090',
      endereco: 'travessa xavier sampaio, 136',
      dataCadastro: '2018-08-04 12:00',
      status: 'ativo'
    };
  }

  remover() {

  }

  editar() {

  }

}

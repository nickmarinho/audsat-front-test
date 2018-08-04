import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../shared/models/clientes.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  clientes: Clientes;

  constructor() { }

  ngOnInit() {
  }

}

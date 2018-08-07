import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Clientes } from '../models/clientes.model';
import { BuscaCepService } from './busca-cep.service';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit, OnChanges {
  @Input() cliente: Clientes;

  constructor(private buscaCepService: BuscaCepService) { }

  ngOnInit() {
    this.carregarCep();
  }

  ngOnChanges() {
    this.carregarCep();
  }

  public consultarCep(cep) {
    if (cep !== undefined && cep.length === 8) {
      this.buscaCepService.consultarCep(cep).subscribe(
        endereco => {
          this.cliente.endereco = endereco;
        }
      );
    }
  }

  public carregarCep() {
    if (this.cliente.cep !== undefined) {
      this.consultarCep(this.cliente.cep);
    }
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CepService } from '../../service/cep.service';
import { Clientes } from '../models/clientes.model';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit, OnChanges {
  @Input() cliente: Clientes;

  constructor(private cepService: CepService) { }

  ngOnInit() {
    if (this.cliente.cep !== undefined) {
      this.consultaCep(this.cliente.cep);
    }
  }

  ngOnChanges() {
    if (this.cliente.cep !== undefined) {
      this.consultaCep(this.cliente.cep);
    }
  }

  public consultaCep(cep) {
    if (cep !== undefined && cep.length === 8) {

      this.cepService.consultaCep(cep).subscribe(
        endereco => {
          this.cliente.endereco = endereco;
        }
      );
    }

  }
}

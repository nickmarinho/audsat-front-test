import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Clientes } from '../../shared/models/clientes.model';

@Component({
  selector: 'app-clientes-busca',
  templateUrl: './clientes-busca.component.html',
  styleUrls: ['./clientes-busca.component.scss']
})
export class ClientesBuscaComponent implements OnInit {
  clientesForm: FormGroup;

  @Input() clientes: Clientes;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.criarFormGroup();
  }

  private criarFormGroup() {
    this.clientes = new Clientes();
    this.clientesForm = this.formBuilder.group({});
    this.clientesForm.addControl('nome', new FormControl('', null));
    this.clientesForm.addControl('email', new FormControl('', null));
    this.clientesForm.addControl('cep', new FormControl('', null));
  }

  buscar() {

  }

}
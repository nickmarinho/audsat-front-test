import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Clientes } from '../../shared/models/clientes.model';

@Component({
  selector: 'app-clientes-busca',
  templateUrl: './clientes-busca.component.html',
  styleUrls: ['./clientes-busca.component.scss']
})
export class ClientesBuscaComponent implements OnInit {
  clientesBuscaForm: FormGroup;

  @Input() clientes: Clientes;
  @Input() clientesBusca: Clientes;
  @Output() filtrarClientesEmitter: EventEmitter<string> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.criarFormGroup();
  }

  private criarFormGroup() {
    this.clientes = new Clientes();
    this.clientesBuscaForm = this.formBuilder.group({});
    this.clientesBuscaForm.addControl('nome', new FormControl('', null));
    this.clientesBuscaForm.addControl('email', new FormControl('', null));
    this.clientesBuscaForm.addControl('cep', new FormControl('', null));
  }

  buscar() {
    this.filtrarClientesEmitter.emit();
  }

}

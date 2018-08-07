import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Clientes } from '../../shared/models/clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-busca',
  templateUrl: './clientes-busca.component.html',
  styleUrls: ['./clientes-busca.component.scss']
})
export class ClientesBuscaComponent implements OnInit {
  clientesBuscaForm: FormGroup;
  clientesBusca: Clientes;
  clientesFiltrados: any;

  @Input() clientes: Clientes;
  @Output() filtrarClientesEmitter: EventEmitter<Clientes[]> = new EventEmitter<Clientes[]>();

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.criarFormGroup();
  }

  private criarFormGroup() {
    this.clientesBusca = new Clientes();
    this.clientesBuscaForm = this.formBuilder.group({});
    this.clientesBuscaForm.addControl('nome', new FormControl('', null));
    this.clientesBuscaForm.addControl('email', new FormControl('', null));
    this.clientesBuscaForm.addControl('cep', new FormControl('', null));
  }

  buscar() {
    this.clientesService.filtrarCliente(this.clientesBusca).subscribe(
      clientesFiltrados => {
        this.filtrarClientesEmitter.emit(clientesFiltrados);
        this.clientesBusca = new Clientes();
      }
    );
  }

  limpar() {
    this.clientesService.getClientes().subscribe(
      clientes => {
        this.filtrarClientesEmitter.emit(clientes);
      }
    );
  }

}

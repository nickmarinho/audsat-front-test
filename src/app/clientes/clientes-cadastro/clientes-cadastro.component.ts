import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../service/clientes.service';
import { Clientes } from '../../shared/models/clientes.model';


@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.scss']
})
export class ClientesCadastroComponent implements OnInit {
  clienteForm: FormGroup;
  @Input() cliente: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params['id'] !== undefined) {
        this.loadCliente(params['id']);
      }
    });

    this.criarFormGroup();
  }

  public loadCliente(idCliente) {
    this.clientesService.getCliente(idCliente).subscribe(
      data => {
        if (data && data !== undefined) {
          this.cliente = data;
        }
      }
    );
  }

  private criarFormGroup() {
    this.cliente = new Clientes();
    this.clienteForm = this.formBuilder.group({});
    this.clienteForm.addControl('nome', new FormControl('', null));
    this.clienteForm.addControl('email', new FormControl('', null));
    this.clienteForm.addControl('telefone', new FormControl('', null));
    this.clienteForm.addControl('cep', new FormControl('', null));
    this.clienteForm.addControl('status', new FormControl('', null));
  }

  public cadastrar(cliente) {
    if (cliente.id) {
      this.clientesService.updateCliente(cliente).subscribe(
        data => {
          this.router.navigate(['clientes/clientes-ficha', cliente.id]);
        }
      );
    } else {
      cliente.status = 'ativo';
      cliente.dataCadastro = new Date();
      this.clientesService.addCliente(cliente).subscribe(
        data => {
          this.router.navigate(['clientes/clientes-lista']);
        }
      );
    }

  }
}

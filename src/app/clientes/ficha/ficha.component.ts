import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../service/clientes.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {
  cliente: any;

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

        this.clientesService.consultaCep(this.cliente.cep).subscribe(
          endereco => {
            this.cliente.endereco = endereco;
          }
        );
      }
    );
  }

  editar(idCliente) {
    this.router.navigate(['clientes/cadastro', idCliente]);
  }

  remover(cliente) {
    this.clientesService.delCliente(cliente);
    this.router.navigate(['clientes']);
  }

}

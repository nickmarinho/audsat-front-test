import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { BuscaCepComponent } from '../shared/busca-cep/busca-cep.component';
import { BuscaCepService } from '../shared/busca-cep/busca-cep.service';
import { ClientesBuscaComponent } from './clientes-busca/clientes-busca.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesFichaComponent } from './clientes-ficha/clientes-ficha.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ClientesService } from './clientes.service';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgbModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  exports: [],
  providers: [
    ClientesService,
    BuscaCepService
  ],
  declarations: [
    BuscaCepComponent,
    ClientesComponent,
    ClientesCadastroComponent,
    ClientesFichaComponent,
    ClientesListaComponent,
    ClientesBuscaComponent
  ]
})
export class ClientesModule { }

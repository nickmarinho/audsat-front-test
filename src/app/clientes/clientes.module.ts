import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { CepService } from '../service/cep.service';
import { ClientesService } from '../service/clientes.service';
import { BuscaCepComponent } from '../shared/busca-cep/busca-cep.component';
import { ClientesBuscaComponent } from './clientes-busca/clientes-busca.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesFichaComponent } from './clientes-ficha/clientes-ficha.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';

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
    CepService
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

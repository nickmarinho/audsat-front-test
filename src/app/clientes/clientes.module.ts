import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FichaComponent } from './ficha/ficha.component';
import { BuscaClientesFormComponent } from './lista/busca-clientes-form/busca-clientes-form.component';
import { ListaComponent } from './lista/lista.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BuscaCepComponent,
    CadastroComponent,
    FichaComponent,
    ListaComponent,
    BuscaClientesFormComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }

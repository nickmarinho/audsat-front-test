import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesFichaComponent } from './clientes-ficha/clientes-ficha.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes-lista',
    pathMatch: 'full'
  },
  {
    path: 'clientes-cadastro',
    component: ClientesCadastroComponent
  },
  {
    path: 'clientes-cadastro/:id',
    component: ClientesCadastroComponent
  },
  {
    path: 'clientes-ficha/:id',
    component: ClientesFichaComponent
  },
  {
    path: 'clientes-lista',
    component: ClientesListaComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

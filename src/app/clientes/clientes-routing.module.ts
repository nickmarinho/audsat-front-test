import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesFichaComponent } from './clientes-ficha/clientes-ficha.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: ClientesComponent
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

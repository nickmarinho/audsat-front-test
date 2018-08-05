import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [

  {
    path: 'clientes',
    component: ClientesComponent,
    children: [
      {
        path: 'clientes-lista',
        component: ClientesListaComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }

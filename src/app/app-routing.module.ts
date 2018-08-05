import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaCepComponent } from './clientes/busca-cep/busca-cep.component';
import { CadastroComponent } from './clientes/cadastro/cadastro.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FichaComponent } from './clientes/ficha/ficha.component';
import { ListaComponent } from './clientes/lista/lista.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'clientes/lista',
    component: ListaComponent
  },
  {
    path: 'clientes/:id',
    component: FichaComponent
  },
  {
    path: 'clientes/cadastro',
    component: CadastroComponent
  },
  {
    path: 'clientes/cadastro/:id',
    component: CadastroComponent
  },
  {
    path: 'clientes/busca-cep',
    component: BuscaCepComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

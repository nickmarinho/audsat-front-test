import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaCepComponent } from './clientes/busca-cep/busca-cep.component';
import { CadastroComponent } from './clientes/cadastro/cadastro.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FichaComponent } from './clientes/ficha/ficha.component';
import { ListaComponent } from './clientes/lista/lista.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ListaComponent,
    FichaComponent,
    CadastroComponent,
    BuscaCepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

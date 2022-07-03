import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarVeiculosComponent } from './listar-veiculos/listar-veiculos.component';
import { NovoVeiculoComponent } from './novo-veiculo/novo-veiculo.component';
import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';
import { VeiculoComponent } from './veiculos/veiculos.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListarVeiculosComponent,
    NovoVeiculoComponent,
    EditarVeiculoComponent,
    VeiculoComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

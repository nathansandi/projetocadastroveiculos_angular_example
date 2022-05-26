
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { ListarVeiculosComponent } from './listar-veiculos/listar-veiculos.component';
    import { NovoVeiculoComponent } from './novo-veiculo/novo-veiculo.component';
    import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    const routes: Routes = [
      { path: 'edit', component: EditarVeiculoComponent },
      { path: 'add', component: NovoVeiculoComponent },
      { path: '', component: ListarVeiculosComponent }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }

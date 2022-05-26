import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../share/veiculoservice.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
})

export class VeiculoComponent implements OnInit {
  veiculos: Veiculo[] = []; 
  veiculo!: Veiculo;

  constructor(private vcs: VeiculoService, private router: Router) {
  }

  editVeiculo(veiculo: Veiculo) {
    console.log(veiculo);
    localStorage.removeItem('editVeiculoId');
    localStorage.setItem('editVeiculoId', veiculo.id.toString());
    this.router.navigate(['edit']);
  }

  deleteVeiculo(veiculo: Veiculo) {
    console.log(veiculo);
    this.vcs.delete(veiculo);
  }

  ngOnInit() {
    console.log('veiculoModelo:init');
    this.veiculos = this.vcs.getall();
    console.log(this.veiculos);
  }
}
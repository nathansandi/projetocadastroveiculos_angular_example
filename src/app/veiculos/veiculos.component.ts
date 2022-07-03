import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../share/veiculoservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
})

export class VeiculoComponent implements OnInit {
  veiculos: Veiculo[] = [];
  veiculo!: Veiculo;

  constructor(private vcs: VeiculoService, private router: Router, private http: HttpClient) {
  }

  editVeiculo(veiculo: Veiculo) {
    console.log(veiculo);
    localStorage.removeItem('editVeiculoId');
    this.http.get<Veiculo[]>('http://localhost:3000/veiculo/'+veiculo.id,  {headers:
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } } ).subscribe(
      (veiculos: Veiculo[]) => {
        console.log('veiculos', veiculos)
        this.veiculos = veiculos
      }
    )
    localStorage.setItem('editVeiculoId', veiculo.id.toString());
    this.router.navigate(['edit']);
  }

  deleteVeiculo(veiculo: Veiculo) {
    console.log(veiculo);
    this.vcs.delete(veiculo);
    this.http.get<Veiculo[]>('http://localhost:3000/veiculo',  {headers:
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } } ).subscribe(
      (veiculos: Veiculo[]) => {
        console.log('veiculos', veiculos)
        this.veiculos = veiculos
      }
    )
  }

  ngOnInit() {
    console.log('veiculoModelo:init');
    this.http.get<Veiculo[]>('http://localhost:3000/veiculo').subscribe(
      (veiculos: Veiculo[]) => {
        console.log('veiculos', veiculos)
        this.veiculos = veiculos
      }
    )
    console.log(this.veiculos);
  }
}

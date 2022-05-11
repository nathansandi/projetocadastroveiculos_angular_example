import { Component, OnInit } from '@angular/core';

import { VEICULO } from './veiculo.mock';
import { Veiculo } from './veiculo.model';

@Component({
  selector: 'app-veiculo-lista',
  templateUrl: './veiculo-lista.component.html',
  styleUrls: ['./veiculo-lista.component.css']
})
export class VeiculoListaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  clientes : Veiculo[] = VEICULO ;

}

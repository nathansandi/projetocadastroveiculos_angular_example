import { Injectable } from '@angular/core';
import { Veiculo } from '../veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculoModelo: Veiculo[] = [{
    id: 0,
    marca: 'BlaBla',
    modelo: 'BlaBla',
    ano: 2010,
    quantidade: 1
  }];

  create(veiculoModelo: Veiculo) {
    const itemIndex = this.veiculoModelo.length;
    veiculoModelo.id = this.getnextId();
    console.log(veiculoModelo);
    this.veiculoModelo[itemIndex] = veiculoModelo;
  }

  delete(veiculoModelo: Veiculo) {
    this.veiculoModelo.splice(this.veiculoModelo.indexOf(veiculoModelo), 1);
  }

  update(veiculoModelo: Veiculo) {
    const itemIndex = this.veiculoModelo.findIndex(item => item.id === veiculoModelo.id);
    console.log(itemIndex);
    this.veiculoModelo[itemIndex] = veiculoModelo;
  }

  getall(): Veiculo[] {
    console.log('veiculoModelo:getall');
    console.log(this.veiculoModelo);
    return this.veiculoModelo;
  }

  reorderVeiculos(veiculoModelo: Veiculo) {
    this.veiculoModelo = this.veiculoModelo
      .map(vc => vc.id === veiculoModelo.id ? veiculoModelo : vc)
      .sort((a, vc) => vc.id - vc.id);
  }

  getVeiculoById(id: number) {
    console.log(id);
    const itemIndex = this.veiculoModelo.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.veiculoModelo[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.veiculoModelo.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
import { Veiculo } from './../veiculo.model';
import { HeaderComponent } from './../header/header.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root',
})

export class VeiculoService {
  [x: string]: any;
  constructor(private http: HttpClient) { headers }

  veiculoModelo: Veiculo[] = [];
  veiculo!: Veiculo;

  create(veiculoModelo: Veiculo): Promise<Veiculo> {
    console.log('iniciei o create')
    let promise = new Promise<Veiculo>((resolve, reject) => {
      setTimeout(()=> {
        veiculoModelo.id = Math.random();
        this.http.post<Veiculo>('http://localhost:3000/veiculo', veiculoModelo).subscribe(data => {})
      },5000);
    });
    return promise;
  }

  delete(veiculoModelo: Veiculo) {
    this.http.delete<Veiculo>('http://localhost:3000/veiculo/'+veiculoModelo.id).subscribe(data => {})

  }

  update(veiculoModelo: Veiculo) {
    this.http.put<Veiculo>('http://localhost:3000/veiculo/'+veiculoModelo.id, veiculoModelo).subscribe(data => {})
  }


  reorderVeiculos(veiculoModelo: Veiculo) {
    this.veiculoModelo = this.veiculoModelo
      .map(vc => vc.id === veiculoModelo.id ? veiculoModelo : vc)
      .sort((a, vc) => vc.id - vc.id);
  }

  getVeiculoById(id: number): Observable<Veiculo> {
    console.log(id);
    return this.http.get<Veiculo>('http://localhost:3000/veiculo/'+id).pipe(
      tap(_ => this['log'](`fetched hero id=${id}`))
    );
  }

}

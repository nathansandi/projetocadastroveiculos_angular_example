import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../share/veiculoservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, pluck } from 'rxjs/operators';


@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private veiculoService: VeiculoService, private http: HttpClient) { }
  addForm = this.formBuilder.group({
    id: [],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    ano: ['', Validators.required],
    quantidade: [''],
  });

  veiculoModelo!: Veiculo;

  ngOnInit() {
    const id = localStorage.getItem('editVeiculoId');

    this.http.get<Veiculo>('http://localhost:3000/veiculo/'+id).subscribe(
      (veiculo: Veiculo) => {
        console.log('veiculos', veiculo)
        this.veiculoModelo = veiculo
      }
    )

    if (!id) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.addForm = this.formBuilder.group({
            id: [],
            marca: ['', Validators.required],
            modelo: ['', Validators.required],
            ano: ['', Validators.required],
            quantidade: [''],
          });
    const data = this.veiculoService.getVeiculoById(+id).forEach;
    this.addForm.setValue(data);
  }

  isInvalid(data: string) {
        return true;
  }

  onSubmit() {
    this.veiculoService.update(this.addForm.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}

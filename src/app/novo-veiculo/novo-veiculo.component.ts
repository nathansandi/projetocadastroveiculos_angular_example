import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../share/veiculoservice.service';
import { FormBuilder, FormGroup, FormGroupName, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})

export class NovoVeiculoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private veiculoService: VeiculoService) { }

  addForm = this.formBuilder.group({
    id: [],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    ano: ['', Validators.required],
    quantidade: [''],
  });

  @Output()
  createVeiculo = new EventEmitter<Veiculo>();

  ngOnInit() {
  this.addForm = this.formBuilder.group({
      id: [],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ano: ['', Validators.required],
      quantidade: [''],
    });
  } 


  isInvalid(data: string) {
    return true;
  }

  onSubmit() {
    this.veiculoService.create(this.addForm.value);

    this.router.navigate(['']);
  }
  onCancel() {
    this.router.navigate(['']);
  }
}
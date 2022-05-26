import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../share/veiculoservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private veiculoService: VeiculoService) { }
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
    const data = this.veiculoService.getVeiculoById(+id);
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

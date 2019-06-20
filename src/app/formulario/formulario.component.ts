import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../Persona'

@Component({
  selector: 'cap-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  contactoForm: FormGroup;
  persona: Persona = new Persona();

  constructor(private fb : FormBuilder) {}

  ngOnInit() {

    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: [''],
      email: ['', Validators.required]
    })
  }
}

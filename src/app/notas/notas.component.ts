import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cap-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})

export class NotasComponent implements OnInit {

  tarea: string;
  listadoTareas = ["Lavar el coche", "Hacer las maletas"];
  status: boolean = false;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.fecha = new Date();
  }

  addTask(task: string): void {
    this.listadoTareas.push(task);
  }
}

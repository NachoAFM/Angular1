import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cap-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.scss']
})
export class ElementosComponent implements OnInit {

  listado = [{nombre:'Huevos',cantidad: 12}, {nombre:'Leche',cantidad: 4}];

  get ListadoValue(){
    return this.listado;
  }
  
  constructor() {
  }

  ngOnInit() {
    
  }

  addElement(newNombre: string, newCantidad: number): void {
    this.listado.push({nombre: newNombre, cantidad: newCantidad});
  }

  removeElement(keyNombre: string, keyCantidad: number): void {
    var ind:number = 0;
    for(let product of this.listado){
      if(product.nombre == keyNombre && product.cantidad == keyCantidad){
        this.listado.splice(ind, 1);
      }
      ind = ind +1;
    }
    //const index = this.listado.indexOf({nombre: keyNombre, cantidad: keyCantidad}, 0);
    //if (index > -1) {
    //  this.listado.splice(index, 1);
    // }
  }
}
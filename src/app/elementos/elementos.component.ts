import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { LogService } from '../log.service';
import { Product } from '../product';

@Component({
  selector: 'cap-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.scss']
})
export class ElementosComponent implements OnInit {

  listado: Product[];

  get ListadoValue(){
    return this.listado;
  }
  
  constructor(private productService: ProductService, private logService: LogService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  // Uso de un servicio para obtener los datos del mock y para sacar el log por consola
  getProducts(): void{
    this.productService.getProducts()
      .subscribe(productos => this.listado = productos);
    this.logService.addLog("Products fetched from mock file");
  }

  addElement(newNombre: string, newCantidad: number): void {
    this.listado.push({nombre: newNombre, cantidad: newCantidad});
    this.logService.addLog("Product added to the list");
  }

  removeElement(keyNombre: string, keyCantidad: number): void {
    var ind:number = 0;
    for(let product of this.listado){
      if(product.nombre == keyNombre && product.cantidad == keyCantidad){
        this.listado.splice(ind, 1);
        this.logService.addLog("Product deleted from list");
      }
      ind = ind +1;
    }
    //const index = this.listado.indexOf({nombre: keyNombre, cantidad: keyCantidad}, 0);
    //if (index > -1) {
    //  this.listado.splice(index, 1);
    // }
  }
}
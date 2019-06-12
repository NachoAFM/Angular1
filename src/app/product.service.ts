import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from './product'; 
import { map } from 'rxjs/operators';

//import { PRODUCTS } from './mock-products';     //<-- using mock file

const BASE_URL = 'http://localhost:3000';
const PRODUCTS_ENDPOINT = '/products';
const URL_SUFIX = '.json';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  private extractData(res: Response){
    let body = res;
    return body || { };
  }

  getProducts(): Observable<Product[]> {
  //  return of(PRODUCTS);                        //<-- using mock file
    return this.http.get<Product[]>(BASE_URL + PRODUCTS_ENDPOINT);
  }

  addProduct(newNombre: string, newCantidad: number) : void {
             
    this.http.post(BASE_URL + PRODUCTS_ENDPOINT,
      {
      "nombre": newNombre,
      "cantidad":  newCantidad
      })
      .subscribe(data  => {console.log("POST Request is successful ", data);
      },
      error  => { console.log("Error", error);
      }
    );
  }

  removeProduct(id: string) : void {

    this.http.delete(BASE_URL + PRODUCTS_ENDPOINT +'/' + id)
    .subscribe(data => {console.log("DELETE Request is successful ", data);
    }
    );
    
  }
}

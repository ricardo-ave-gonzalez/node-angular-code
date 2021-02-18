import { Injectable } from '@angular/core';
import { Observer, Observable} from 'rxjs';
import { Producto } from './../interfaces';
import { PRODUCTOS } from './../mock-productos'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos:Producto[];
  constructor() { }

  getProductos():Observable<Producto[]>{
    return new Observable((observer: Observer<Producto[]>) => {
        observer.next(PRODUCTOS);
        observer.complete();
    })
  }
  getId(id:number):Observable<Producto[]>{
    return new Observable((observer: Observer<Producto[]>) =>{
        if(id == null){
          this.productos.find(id);
          observer.next(PRODUCTOS);
          observer.complete();
        }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../Servicios/producto.service';
import { Producto } from '../../interfaces';
import { PRODUCTOS } from '../../mock-productos';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo:string = "Listado de Productos";
  productos:Producto[];
  productoSeleccionado:number;
  modificacionProducto:boolean;
  constructor(private svcProducto:ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  
  obtenerProductos(){
    this.svcProducto.getProductos().subscribe(data => this.productos = data)
  }
  editarProducto(id:number){
    this.modificacionProducto = false;
    this.productoSeleccionado = id;
  }
  eliminarProducto(id:number):any{
    this.productoSeleccionado = id;
    this.productos = this.productos.filter(x => x.id !== this.productoSeleccionado)
    console.log(id)
  }
}

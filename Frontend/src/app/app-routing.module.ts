import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router"
import { ListadoComponent } from '././Productos/listado/listado.component';
import { PedidoComponent } from '././Carrito/pedido/pedido.component';
import { EntrarComponent } from '././Seccion/entrar/entrar.component';
import { DetalleComponent } from '././Productos/detalle/detalle.component';
import { RegistrarseComponent } from '././Seccion/registrarse/registrarse.component';

const routes: Routes = [
  { path: 'home', component: ListadoComponent },
  { path: 'productos',component: ListadoComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'detalle/:id', component: DetalleComponent},
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

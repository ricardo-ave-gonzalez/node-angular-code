import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './Productos/listado/listado.component';
import { DetalleComponent } from './Productos/detalle/detalle.component';
import { ClienteComponent } from './Carrito/cliente/cliente.component';
import { DetalleCarritoComponent } from './Carrito/detalle-carrito/detalle-carrito.component';
import { PedidoComponent } from './Carrito/pedido/pedido.component';
import { ArticuloComponent } from './Carrito/articulo/articulo.component';
import { EntrarComponent } from './Seccion/entrar/entrar.component';
import { RegistrarseComponent } from './Seccion/registrarse/registrarse.component';
import { UsuarioComponent } from './Seccion/usuario/usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Servicios/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    ClienteComponent,
    NavbarComponent,
    DetalleCarritoComponent,
    PedidoComponent,
    ArticuloComponent,
    EntrarComponent,
    RegistrarseComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

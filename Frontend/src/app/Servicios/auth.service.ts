import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable, Observer, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Usuario } from './../interfaces';
import { Router } from '@angular/router';

/* const httpOptions = {
 headers: new HttpHeaders({
   'Content-Type': 'application/json',
   'Authorization': 'my-auth-token'
 })
} */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlUsuarios = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  /* getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    }
  } */

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error de http frontend', error.error.message)
    }
    else {
      console.log(`Error de http Backend: ${error.status}, cuerpo del error: ${error.message}`)
    }
    return throwError('Error en comunicación Http')
  }

  registrarUsuario(user: Usuario) {
    return this.http.post<any>(`${this.urlUsuarios}/registrarse`, user);
  }

  entrarUsuario(user: Usuario) {
    return this.http.post<any>(`${this.urlUsuarios}/entrar`, user);
  }

  loguearse() {
    return !!localStorage.getItem('token');
  }

  salir() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}

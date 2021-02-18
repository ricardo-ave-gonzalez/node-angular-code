import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../Servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from './../../interfaces/usuario';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  //user = {email:'', password:''}
  user:Usuario = {email:'', password:''}

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  entrar() {
    this.authService.registrarUsuario(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/producto']);
        },
        err => console.log(err)
      )
  }

}

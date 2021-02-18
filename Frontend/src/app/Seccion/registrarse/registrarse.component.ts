import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../Servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from './../../interfaces/';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  user = {email:'', password:''}
  // user:Usuario;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  registrarse(){
    this.authService.registrarUsuario(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    )
  }
}

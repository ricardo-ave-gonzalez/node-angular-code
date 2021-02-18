import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../Servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from './../../interfaces/';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

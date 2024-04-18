import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, BienvenidoComponent, ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = new Usuario();
  mostrarBienvenido: boolean = false;
  mostrarError: boolean = false;

  validarUsuario(){
    if(this.usuario.nombre == "cynthia" && this.usuario.clave == "123456"){
      this.mostrarBienvenido = true;
    }else{
      this.mostrarError = true;
    }
    const usuarioString = JSON.stringify(this.usuario);
    localStorage.setItem("usuario",usuarioString);

  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
  usuario = {
    nome: '',
    email: '',
    cargo: '',
    senha: ''
  };
  constructor(private router: Router) { }
  senhaInvalida: boolean = false;

  submitForm() {
    if (this.usuario.nome && this.usuario.email && this.usuario.cargo && this.usuario.senha && !this.senhaInvalida) {
      // Aqui você pode enviar os dados do usuário para o servidor ou fazer o que for necessário
      console.log('Usuário enviado:', this.usuario);
      // Limpa o formulário após o envio
      // this.usuario = {
      //   nome: '',
      //   email: '',
      //   cargo: '',
      //   senha: ''
      // };
      // Alerta de usuário cadastrado corretamente
      alert('Usuário cadastrado corretamente!\n' + `Novo usuário adicionado:\nNome: ${this.usuario.nome}\nEmail: ${this.usuario.email}\nFunção: ${this.usuario.cargo}\nSenha: ${this.usuario.senha}`);
      
      this.router.navigate(['/app/users']);
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  checkSenha() { 
    this.senhaInvalida = this.usuario.senha.length < 6 || this.usuario.senha.length > 15;
  }
}

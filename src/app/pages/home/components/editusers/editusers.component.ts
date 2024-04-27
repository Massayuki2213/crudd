import { Component } from '@angular/core';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent {
  usuario = {
    nome: '',
    email: '',
    cargo: '',
    senha: ''
  };

  senhaInvalida: boolean = false;

  submitForm() {
    if (this.usuario.nome && this.usuario.email && this.usuario.cargo && this.usuario.senha && !this.senhaInvalida) {
      // Aqui você pode enviar os dados do usuário para o servidor ou fazer o que for necessário
      console.log('Usuário atualizado:', this.usuario);
      // Limpa o formulário após o envio
      this.usuario = {
        nome: '',
        email: '',
        cargo: '',
        senha: ''
      };
      // Alerta de usuário cadastrado corretamente
      alert('Usuário atualizado!');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  checkSenha() {
    this.senhaInvalida = this.usuario.senha.length < 6 || this.usuario.senha.length > 15;
  }
}

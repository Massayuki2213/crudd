import { Component, Input } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  task = [
    { nome: 'Alice Mayer', email: 'alice@example.com', cargo: 'Engenheiro de FE', senha:'123456'},
    { nome: 'Antonio Guilherme', email: 'guilherme@example.com', cargo: 'Engenheiro de FB', senha:'654321' }
  ];

  novoNome: string = '';
  usuarioSelecionado: any;
  
  constructor(private router: Router) { }
 

  adicionarUsuario(): void {
    if (this.novoNome.trim() !== '') {
      const novoUsuario = {
        nome: this.novoNome,
        email: '',
        cargo: '',
        senha: ''
      };
      this.task.push(novoUsuario);
      this.novoNome = ''; // Limpa o campo de entrada após adicionar a tarefa
    }
  }

  editarUsuario(usuario: any): void {
    this.usuarioSelecionado = usuario; 
    this.router.navigate(['/app/editusers', { usuario: JSON.stringify(usuario) }]);
  }
 
  excluirUsuario(usuario: any): void {
    this.task = this.task.filter(t => t !== usuario);
  }
}

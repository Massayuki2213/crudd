import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  task = [
    { nome: 'Alice Mayer', email: 'alice@example.com', cargo: 'Engenheiro de FE' },
    { nome: 'Antonio Guilherme', email: 'guilherme@example.com', cargo: 'Engenheiro de FB' }
  ];

  novoNome: string = '';

  adicionarUsuario(): void {
    if (this.novoNome.trim() !== '') {
      const novoUsuario = {
        nome: this.novoNome,
        email: '',
        cargo: ''
      };
      this.task.push(novoUsuario);
      this.novoNome = ''; // Limpa o campo de entrada após adicionar a tarefa
    }
  }

  excluirUsuario(usuario: any): void {
    this.task = this.task.filter(t => t !== usuario);
  }
}

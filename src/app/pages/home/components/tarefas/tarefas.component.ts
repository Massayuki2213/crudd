import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  
  task = [
    { description: 'Tarefa 1', status: 'Iniciar', editing: false },
    { description: 'Tarefa 2', status: 'Iniciar', editing: false },
    { description: 'Tarefa 3', status: 'Iniciar', editing: false },
    { description: 'Tarefa 4', status: 'Iniciar', editing: false },
    { description: 'Tarefa 5', status: 'Iniciar', editing: false }
  ];
  
  novaDescricao: string = '';

  botaoConcluir(task: any){
    if (task.status === 'Iniciar') {
      task.status = 'Realizando';
    } else if (task.status === 'Realizando') {
      task.status = 'Concluída';
    } else {
      task.status = 'Iniciar';
    }
  }

  editarTarefa(task: any) {
    task.editing = !task.editing;
  }

  salvarEdicao(task: any) {
    task.editing = false; // Saia do modo de edição
  }

  excluirTarefa(task: any): void {
    this.task = this.task.filter(t => t !== task);
  }

  adicionarTarefa(): void {
    if (this.novaDescricao.trim() !== '') {
      const novaTarefa = {
        description: this.novaDescricao,
        status: 'Iniciar',
        editing: false
      };
      this.task.push(novaTarefa);
      this.novaDescricao = ''; // Limpa o campo de entrada após adicionar a tarefa
    }
  }
}

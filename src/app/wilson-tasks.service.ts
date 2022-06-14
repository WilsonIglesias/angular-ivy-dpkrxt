import { Injectable } from '@angular/core';

@Injectable()
export class WilsonTasksService {
  list = ['Adicionar tarefa', 'Adicionar Tarefa 2', 'Adicionar Tarefa 3'];

  constructor() {}

  getlist() {
    return this.list;
  }

  deleteTask(i: any) {
    this.list.splice(i, 1);
  }

  createTask(task: string) {
    this.list.push(task);
  }
}

import { Component, OnInit } from '@angular/core';
import { WilsonTasksService } from '../wilson-tasks.service';

@Component({
  selector: 'app-wilson-tasks',
  templateUrl: './wilson-tasks.component.html',
  styleUrls: ['./wilson-tasks.component.css'],
})
export class WilsonTasksComponent implements OnInit {
  lista = null;
  tarefa = 'Nome';

  constructor(public tasks: WilsonTasksService) {}

  deleteTask(i: any) {
    this.tasks.deleteTask(i);
  }

  createTask() {
    this.tasks.createTask(this.tarefa);
  }

  ngOnInit() {
    this.lista = this.tasks.getlist();
  }
}

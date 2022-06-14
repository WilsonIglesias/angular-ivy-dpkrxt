import { Component, OnInit } from '@angular/core';
import { WilsonTasksService } from '../wilson-tasks.service';

@Component({
  selector: 'app-wilson-home',
  templateUrl: './wilson-home.component.html',
  styleUrls: ['./wilson-home.component.css']
})
export class WilsonHomeComponent implements OnInit {

  constructor(public tasks: WilsonTasksService) { }

  ngOnInit() {
  }

}
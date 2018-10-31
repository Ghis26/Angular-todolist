import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  size: number;

  constructor(private taskService: TasksService, private location: Location) {
   }

  ngOnInit() {
    this.getTasks();
    this.size = this.taskService.getSize();
  }

getTasks(): void {
this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
}

goBack(): void {
  this.location.back();
}

}

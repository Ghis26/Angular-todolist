import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nbUsers: number;
  nbTasks: number;
  finishTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  tasks: Task[];

  constructor(private userService: UserService, private taskService: TasksService) { }

  ngOnInit() {
    this.getTasks();

    this.nbUsers = this.userService.getSize();
    this.nbTasks = this.taskService.getSize();
    this.finishedTasks();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);

  }

  finishedTasks(): void {
    for (let i = 0; i < this.tasks.length ; i++) {
     if (this.tasks[i].status === 'Terminée') {
       this.finishTasks.push(this.tasks[i]);
     }
     if (this.tasks[i].status === 'En cours') {
      this.inProgressTasks.push(this.tasks[i]);
    }
  }
}
}

import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

data: any = {};

tasks: Task[];

users: User[];

constructor(private taskService: TasksService,
   private router: Router,
   private userService: UserService) {

}

ngOnInit() {
this.getUsers();
}

getUsers(): void {
  this.userService.getUsers().subscribe(users => this.users = users);
}

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  onSubmit(): void {
    const task = new Task(
      this.data.title, this.data.description, 'En cours', this.data.affectation
    );
    this.taskService.addTask(task);
    console.log(task);
    this.router.navigate(['/tasks-list']);
  }

  goBack(): void {
    this.router.navigate(['/tasks-list']);
  }
}

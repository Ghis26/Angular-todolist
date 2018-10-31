import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User} from '../user.model';
import { Location } from '@angular/common';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  tasks: Task[];
  users: User[];

  constructor(private userService: UserService, private location: Location, private taskService: TasksService) { }

  ngOnInit() {
   this.getUsers();
   this.getTasks();
   this.getUserTasks();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

getTasks(): void {
  this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
}

  getUserTasks(): void {
     let count = 0;
    for (const user of this.users) {
      for (const task of this.tasks) {
        if (task.affectation === user.name) {
          count++;
        }
      }
      user.nbTasks = count;
      count = 0;
    }

    }

  goBack(): void {
    this.location.back();
  }

}

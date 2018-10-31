import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nbUsers: number;
  nbTasks: number;

  constructor(private userService: UserService, private taskService: TasksService) { }

  ngOnInit() {

    this.nbUsers = this.userService.getSize();
    this.nbTasks = this.taskService.getSize();
  }

}

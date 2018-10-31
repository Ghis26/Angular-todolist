import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  data: any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const user = new User(
      this.data.name, this.data.birthDate, 0
    );
    this.userService.addUser(user);
    this.router.navigate(['/users-list']);
}

goback() {
  this.router.navigate(['/users-list']);
}
}

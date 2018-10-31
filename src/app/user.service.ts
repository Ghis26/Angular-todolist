import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

users: User[] = [
  {
    name: 'Ghis',
    birthDate: '06-11-1987',
    nbTasks: 0
  },
  {
    name: 'Tony',
    birthDate: '25-04-1990',
    nbTasks: 0
  },
  {
    name: 'Max',
    birthDate: '01-08-1996',
    nbTasks: 0
  },
  {
    name: 'Nico',
    birthDate: '11-07-1994',
    nbTasks: 0
  }
];

constructor() {

}

getUsers(): Observable<User[]> {
return of (this.users);
}

getSize(): number {
  return this.users.length;
}

addUser(user: User) {
this.users.push(user);
this.getUsers();
}

}

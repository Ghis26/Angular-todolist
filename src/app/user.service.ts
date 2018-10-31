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
    birthYear: '1987'
  },
  {
    name: 'Tony',
    birthYear: '19XX'
  },
  {
    name: 'Max',
    birthYear: '19YY'
  },
  {
    name: 'Nico',
    birthYear: '19ZZ'
  }
];

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

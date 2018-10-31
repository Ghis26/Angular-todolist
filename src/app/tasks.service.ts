import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [
    {
      title: 'Tache 1',
      description: 'Ceci est la 1ère tache'
    },
    {
      title: 'Tache 2',
      description: 'Idem'
    },
    {
      title: 'Test Taches',
      description: '19YY'
    }
    ];
  constructor() { }

  getTasks(): Observable<Task[]> {
  return of (this.tasks);
  }
  getSize(): number {
    return this.tasks.length;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.getTasks();
}

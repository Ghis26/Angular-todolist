import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users-list', component: UsersListComponent},
  {path: 'tasks-list', component: TaskListComponent},
  {path: 'add-user', component: AddUserFormComponent},
  {path: 'add-task', component: AddTaskFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

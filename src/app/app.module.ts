import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { MenuComponent } from './menu/menu.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    TaskListComponent,
    MenuComponent,
    AddUserFormComponent,
    AddTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

taskForm: FormGroup;

constructor(private formBuilder: FormBuilder, private taskService: TasksService, private router: Router) {

}

ngOnInit() {
  this.initForm();
}

initForm() {
  this.taskForm = this.formBuilder.group({
    title: '',
    description: ''
  });
}

  onSubmit(): void {
    const formValue = this.taskForm.value;
     const newTask = new Task(formValue['title'], formValue['description']);
    this.taskService.addTask(newTask);
    this.router.navigate(['/users-list']);
  }
}

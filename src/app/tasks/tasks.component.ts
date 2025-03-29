import { Component, inject, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { TasksService } from './tasks.service';
import { DUMMY_USERS } from '../dummy-users';
import { ResolveFn } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  private tasksService = inject(TasksService);

  users = DUMMY_USERS;

  isAddingTask = false;

  get name() {
    return this.users.find((user) => user.id === this.userId())?.name;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}

export const resolveUserId: ResolveFn<string> = (route, state) => {
  return route.paramMap.get('userId') || '';
};

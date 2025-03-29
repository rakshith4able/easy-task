import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { TasksService } from './tasks.service';
import { DUMMY_USERS } from '../dummy-users';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  // @Input({ required: true }) userId!: string;
  userId: string = '';

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap
      .pipe(map((paramsMap) => paramsMap.get('userId')))
      .subscribe({
        next: (userId) => {
          this.userId = userId || '';
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  users = DUMMY_USERS;

  isAddingTask = false;

  get name() {
    return this.users.find((user) => user.id === this.userId)?.name;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}

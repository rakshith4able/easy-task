import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveUserId, TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  { path: '', component: NoTaskComponent },
  {
    path: 'users/:userId',
    component: TasksComponent,
    resolve: { userId: resolveUserId },
  },
];

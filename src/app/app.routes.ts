import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveUserId } from './tasks/tasks.component';

export const routes: Routes = [
  { path: '', component: NoTaskComponent },
  {
    path: 'users/:userId',
    loadComponent: () =>
      import('./tasks/tasks.component').then((module) => module.TasksComponent),
    resolve: { userId: resolveUserId },
  },
];

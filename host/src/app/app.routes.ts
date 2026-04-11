import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'angular',
    loadComponent: () =>
      import('mf2/Component').then((m) => m.App),
  }
];

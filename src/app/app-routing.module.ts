import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameModule } from './game';
import { MenuModule } from './menu';

const routes: Routes = [
  {
    path: 'menu',

    loadChildren: () => MenuModule,
  },
  {
    path: 'game',
    loadChildren: () => GameModule,
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'menu',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

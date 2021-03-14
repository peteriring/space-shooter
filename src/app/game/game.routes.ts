import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { RouteParamGuard } from './route.guard';

const routes = [
  {
    path: '',
    children: [
      {
        path: ':seed',
        component: GameComponent,
        pathMatch: 'full',
        runGuardsAndResolvers: 'always' as 'always',
        canActivate: [RouteParamGuard],
      },
      {
        path: '',
        pathMatch: 'full',
        runGuardsAndResolvers: 'always' as 'always',
        canActivate: [RouteParamGuard],
      },
    ],
  },
];

@NgModule({
  providers: [RouteParamGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutes {}

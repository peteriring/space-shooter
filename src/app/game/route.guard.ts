import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class RouteParamGuard implements CanActivate {
  constructor(private readonly router: Router) {}

  public canActivate(activatedRoute: ActivatedRouteSnapshot): boolean {
    const seed = activatedRoute.params['seed'];
    if (!seed) this.router.navigate(['']);
    return !!seed;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimeGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let limit = new Date(2017, 4, 30);
    let current = new Date();
    if (limit.getTime() > current.getTime()) {
      return true;
    } else {
      window.alert('記事の公開期限が過ぎています。');
      return false;
    }
  }
}

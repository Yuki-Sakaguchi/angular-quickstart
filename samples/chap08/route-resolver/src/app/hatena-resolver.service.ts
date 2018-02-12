import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { HatenaService } from './hatena.service';

@Injectable()
export class HatenaResolver implements Resolve<any> {
  constructor(private hatena: HatenaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.hatena.requestGet(route.params['url']);
  }
}

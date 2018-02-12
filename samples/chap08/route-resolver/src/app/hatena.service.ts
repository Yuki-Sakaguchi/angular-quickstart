import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HatenaService {
  times = 0;

  constructor(private jsonp: Jsonp) { }

  requestGet(url: string): Observable<any> {
    let params = new URLSearchParams();
    params.set('url', url);
    //params.set('callback', 'JSONP_CALLBACK');
    params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
    this.times=this.times + 1;

    return this.jsonp.get('http://b.hatena.ne.jp/entry/jsonlite/', { search: params })
      .map(
        response => {
          return response.json() || {};
        }
      )
      .catch(
        error => {
          return Observable.throw(error.statusText);
        }
      );
  }
}

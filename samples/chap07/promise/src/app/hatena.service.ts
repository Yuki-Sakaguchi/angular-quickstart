import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HatenaService {

  constructor(private jsonp: Jsonp) { }

  requestGet(url: string): Promise<any> {
    let params = new URLSearchParams();
    params.set('url', url);
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get('http://b.hatena.ne.jp/entry/jsonlite/',
      { search: params })
      .toPromise()
      .then(
        response => {
          return response.json() || {};
        }
      )
      .catch(
        error => {
          return Promise.reject(error.statusText);
        }
      );
  }
}
import { Injectable } from '@angular/core';
import { BaseRequestOptions } from '@angular/http';

@Injectable()
export class MyRequestOptions extends BaseRequestOptions {
  constructor() {
    super();
    this.headers.set('X-Requested-With', 'XMLHttpRequest');
  }
}

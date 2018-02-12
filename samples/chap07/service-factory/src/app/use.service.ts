import { Injectable } from '@angular/core';

@Injectable()
export class UseService {
  created :Date;

  constructor() {
    this.created = new Date();
    this.sleep(2000);
  }

  show() {
    return this.created.toLocaleString();
  }

  sleep(delay: number) {
    let tmp1 = new Date();
    while (true) {
      let tmp2 = new Date();
      if (tmp2.getTime() - tmp1.getTime() > delay) {
        return;
      }
    }
  }
}

import { Component, Inject } from '@angular/core';
import { KEYWORDS } from './app-info';

@Component({
  selector: 'my-app',
  template: ``,
})
export class AppComponent  { 
  constructor(@Inject(KEYWORDS)private keywords: string) {
  //constructor(@Inject(KEYWORDS)private keywords: string[]) {
    console.log(keywords);
  }
}

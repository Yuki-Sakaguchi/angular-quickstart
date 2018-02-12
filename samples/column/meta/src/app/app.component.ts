import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `<h1>Hello Angular</h1>`,
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
     this.meta.addTag({
       name: 'author',
       content: 'YAMADA, Yoshihiro'
     });
   }
}


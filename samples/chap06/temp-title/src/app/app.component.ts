import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser'; 

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  providers: [ Title ]
})
export class AppComponent  { 
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Titleサービス');
  }

  name = 'Angular';
}

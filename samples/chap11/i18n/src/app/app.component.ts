import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 i18n>Hello {{name}}</h1>
    <img src="http://www.wings.msn.to/image/wings.jpg" i18n-title title="WINGS Project Logo" />
    <ng-container i18n>This is i18n sample</ng-container>
  `,
})
export class AppComponent  { 
  name = 'Angular';
}

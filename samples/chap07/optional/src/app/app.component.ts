import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-parent></my-parent>  
    <my-noparent></my-noparent>
  `,
})
export class AppComponent {}

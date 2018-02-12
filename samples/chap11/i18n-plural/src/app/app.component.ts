import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div i18n>{ hamsters, plural,
      =0 { no hamsters }
      =1 { only one hamster }
      other { many hamsters }
    }</div>
  `,
})
export class AppComponent  { 
  hamsters = 5;
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `
    <ng-template #myTemp let-greet let-name="name">
      <div>{{greet}}、{{name}}さん！</div>
    </ng-template>
    <ng-container *ngTemplateOutlet="myTemp; context: data">
    </ng-container>
  `
})
export class AppComponent {
  data = { $implicit: 'こんにちは', name: '山田' };
}

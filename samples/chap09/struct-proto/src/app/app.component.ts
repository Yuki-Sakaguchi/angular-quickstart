import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div *ngIf="flag">flagはtrueです。</div>    

    <!--
    <ng-template [ngIf]="flag">
      <div>flagはtrueです。</div>
    </ng-template>
    -->
  `,
})
export class AppComponent  {
  flag = true;
}


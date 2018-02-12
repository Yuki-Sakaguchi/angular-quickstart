import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
     <div class="line back" [class]="clazz">WINGSプロジェクト</div>
  `,

  // クラスバインディングを利用した場合
  /*
  template: `
    <div class="line back" [class.fore]="flag">WINGSプロジェクト</div>
  `,
  */
  styles: [`
    .line { border: solid 1px #f00; }
    .back { background-color: #0ff; }
    .fore { color: Red; }
  `]
})
export class AppComponent {
   clazz = 'fore';
  //flag = true;
}
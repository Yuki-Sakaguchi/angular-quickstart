import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div [ngPlural]="favs.length">
      <ng-template ngPluralCase="=0">［いいね！］されていません。
      </ng-template>
      <ng-template ngPluralCase="=1">1人だけ［いいね！］と言ってくれています。      
      </ng-template>
      <ng-template ngPluralCase="other">
        {{favs.length}}人が［いいね！］と言っています。
      </ng-template>
    </div>
  `
})
export class AppComponent  {
  favs: string[] = [ '山田理央', '鈴木洋平', '腰掛奈美' ];
}

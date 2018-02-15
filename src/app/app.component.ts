import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',

  template: `<div class="wrapper">`

              // ngIf
              +
              `<div class="inner">
                <h3>ngIf</h3>
                <form>
                  <label for="show">表示/非表示：</label>
                  <input id="show" name="show" type="checkbox" [(ngModel)]="show">
                </form>
                <div *ngIf="show; then trueContent else elseContent"></div>
                <ng-template #trueContent>
                  <p>
                    表示中です表示中です表示中です表示中です表示中です
                    表示中です表示中です表示中です表示中です表示中です
                    表示中です表示中です表示中です表示中です表示中です
                  </p>
                </ng-template>
                <ng-template #elseContent>
                  <p>非表示です</p>
                </ng-template>
              </div>`

              // ngSwitch
              +
              `<div class="inner">
                <h3>ngSwitch</h3>
                <form>
                  <select name="season" [(ngModel)]="season">
                    <option value="">四季を選択</option>
                    <option value="spring">春</option>
                    <option value="summer">夏</option>
                    <option value="autumn">秋</option>
                    <option value="winter">冬</option>
                  </select>
                </form>
                <div [ngSwitch]="season">
                  <span *ngSwitchCase="'spring'">はる！！</span>
                  <span *ngSwitchCase="'summer'">なつ！！</span>
                  <span *ngSwitchCase="'autumn'">あき！！</span>
                  <span *ngSwitchCase="'winter'">ふゆ！！</span>
                  <span *ngSwitchDefault>選択してください</span>
                </div>
              </div>`

              // ngFor
              +
              `<div class="inner">
                <h3>ngFor</h3>
                <table class="table">
                  <tr>
                    <th>タイトル</th>
                    <th>テキスト</th>
                  </tr>
                  <tr *ngFor="let b of books">
                    <td>{{ b.title }}</td>
                    <td>{{ b.text }}</td>
                  </tr>
                </table>

                <br>

                <table class="table">
                  <tr>
                    <th>値</th>
                    <th>index</th>
                    <th>first</th>
                    <th>last</th>
                    <th>even</th>
                    <th>odd</th>
                  </tr>
                  <tr *ngFor="let obj of data; index as i; first as first; last as last; even as even; odd as odd;">
                    <td>{{ obj }}</td>
                    <td>{{ i }}</td>
                    <td>{{ first ? '◯' : '-' }}</td>
                    <td>{{ last  ? '◯' : '-' }}</td>
                    <td>{{ even  ? '◯' : '-' }}</td>
                    <td>{{ odd   ? '◯' : '-' }}</td>
                  </tr>
                </table>

                <br>

                <ng-container *ngFor="let article of articles">
                  <article>
                    <header>{{ article.title }}</header>
                    <div>{{ article.body }}</div>
                    <footer ng-repeat-end>{{ article.author }}</footer>
                  </article>
                </ng-container>

              </div>
            </div>`,
  
  styles: [`
    .wrapper {
      padding: 20px;
    }

    .inner {
      margin: 20px 0;
    }

    article {
      margin: 10px 0;
      padding: 10px;
      border: 1px solid gray;
    }
  `]
})

export class AppComponent  {
  // ngIf
  show = false;

  // ngSwitch
  season = "";

  // ngFor
  books = [
    {
      title: 'タイトル１です。',
      text: 'テキスト１です。'
    },
    {
      title: 'タイトル２です。',
      text: 'テキスト２です。'
    }
  ];

  // ngForでindex, first, last, even, oddを使う
  data = [
    '子',
    '丑',
    '寅',
    '卯',
    '辰',
    '巳',
    '午',
    '未',
    '申',
    '酉',
    '戌',
    '亥'
  ];

  // ngForでng-containerを使う
  articles = [
    {
      title: 'タイトル１',
      body: '本文１',
      author: '書き手１'
    },
    {
      title: 'タイトル２',
      body: '本文２',
      author: '書き手２'
    },
    {
      title: 'タイトル３',
      body: '本文３',
      author: '書き手３'
    },
  ]
}

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

                <h4>ループの変数</h4>
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

                <h4>差分だけ更新</h4>
                <input type="button" (click)="upload()" value="更新">
                <ng-container *ngFor="let article of articles; trackBy: trackFn">
                  <article>
                    <header>{{ article.title }}</header>
                    <div>{{ article.body }}</div>
                    <footer ng-repeat-end>{{ article.author }}</footer>
                  </article>
                </ng-container>

                <br>

                <h4>ページング</h4>
                <table class="table">
                  <tr>
                    <th>id</th><th>title</th>
                  </tr>
                  <tr *ngFor="let item of list | slice: start: start + len">
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                  </tr>
                </table>
                <ul class="pagination">
                  <li *ngFor="let item of list | slice: 0: pagingCount; index as i;">
                    <a (click)="pager(i)">{{ (i+1) }}</a>
                  </li>
                </ul>
              </div>`

              // ngStyle
              +
              `<div class="inner">
                <h3>ngStyle</h3>
                <input type="button" (click)="back = !back" value="背景色">
                <input type="button" (click)="fore = !fore" value="前景色">
                <input type="button" (click)="space = !space" value="余白">
                <div [ngStyle]="styles">
                  <p>
                    サンプルテキストサンプルテキストサンプルテキスト
                    サンプルテキストサンプルテキストサンプルテキスト
                  </p>
                </div>
              </div>`

              // ngClass
              +
              `<div class="inner">
                <h3>ngClass</h3>
                <input type="button" (click)="className.back = !className.back" value="背景色">
                <input type="button" (click)="className.fore = !className.fore" value="前景色">
                <input type="button" (click)="className.space = !className.space" value="余白">
                <div [ngClass]="className">
                  <p>
                    サンプルテキストサンプルテキストサンプルテキスト
                    サンプルテキストサンプルテキストサンプルテキスト
                  </p>
                </div>
              </div>`

              // ngPlural
              +
              `<div class="inner">
                <h3>ngPlural</h3>
                <div [ngPlural]="favs.length">
                  <ng-template ngPluralCase="0">
                    [いいね！]されていません。
                  </ng-template>
                  <ng-template ngPluralCase="1">
                      一人だけ[いいね！]といってくれています。
                  </ng-template>
                  <ng-template ngPluralCase="other">
                    {{ favs.length }}人が[いいね！]といっています。
                  </ng-template>
                </div>
              </div>`

              // ngTemplateOutlet
              +
              `<div class="inner">
                <h3>ngTemplateOutlet</h3>

                <!-- 事前にテンプレート作成 -->
                <ng-template
                  #myTemp
                  let-isbn="isbn"
                  let-title="title"
                  let-price="price"
                  let-publisher="publisher"
                >
                  <div>
                    <ul>
                      <li>{{ title }}</li>
                      <li>{{ publisher }}</li>
                      <li>{{ price }}</li>
                    </ul>
                  </div>
                </ng-template>

                <!-- 選択ボックス -->
                <select name="temp" [(ngModel)]="temp">
                  <option *ngFor="let b of tmpBooks; let i = index" [value]="i">
                    {{ b.title }}
                  </option>
                </select>

                <!-- テンプレートが入る場所 -->
                <ng-container *ngTemplateOutlet="myTemp; context: tmpBooks[temp]">
                </ng-container>
              </div>

            </div>`,
  
  styleUrls: ['./app.component.scss']
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
      id: 1,
      title: 'タイトル１',
      body: '本文１',
      author: '書き手１'
    },
    {
      id: 2,
      title: 'タイトル２',
      body: '本文２',
      author: '書き手２'
    },
    {
      id: 3,
      title: 'タイトル３',
      body: '本文３',
      author: '書き手３'
    },
  ];

  // 記事を更新
  upload() {
    this.articles = [
      {
        id: 1,
        title: 'タイトル１',
        body: '本文１',
        author: '書き手１'
      },
      {
        id: 2,
        title: 'タイトル２',
        body: '本文２',
        author: '書き手２書き手２'
      },
      {
        id: 3,
        title: 'タイトル３',
        body: '本文３本文３本文３',
        author: '書き手３'
      },
      {
        id: 4,
        title: 'タイトル４',
        body: '本文４',
        author: '書き手４'
      },
    ];
  }

  // 記事を更新するたびに同じ内容を書き換えてしまって無駄なので、
  // トラッキング式を使う（差分だけ更新する）
  // （ngForに夜オブジェクト追跡のためのキーを決める）
  trackFn(index: any, article: any) {
    return article.id; //-> キーとしてidをキーとして扱う
  }

  // ページング
  list = [
    {
      id: 1,
      title: "タイトル１"
    },
    {
      id: 2,
      title: "タイトル２"
    },
    {
      id: 3,
      title: "タイトル３"
    },
    {
      id: 4,
      title: "タイトル４"
    },
    {
      id: 5,
      title: "タイトル５"
    },
    {
      id: 6,
      title: "タイトル６"
    },
    {
      id: 7,
      title: "タイトル７"
    },
    {
      id: 8,
      title: "タイトル８"
    },
    {
      id: 9,
      title: "タイトル９"
    },
    {
      id: 10,
      title: "タイトル１０"
    },
  ];

  // ページング
  start = 0; // 初期設定
  len = 3; // １ページの件数
  pagingCount = Math.ceil(this.list.length / this.len); // ページングの最大件数
  pager(page: number) {
    this.start = this.len * page;
  }

  //ngStyle
  back = false;
  fore = false;
  space = false;
  get styles() {
    return {
      'background-color': this.back ? 'gray' : '',
      'color': this.fore ? 'white' : '',
      'padding.px': this.space ? 15 : 5,
    }
  }

  // ngClass
  className = {
    back: false,
    fore: false,
    space: false
  }

  // ngPlural
  favs: string[] = [
    '山田', '佐藤', '伊藤',
  ];

  // ngTemplateOutlet
  // デフォルトの選択値
  temp = 0;
  
  // 書籍情報
  tmpBooks = [
    {
      isbn: 1,
      title: '本１',
      price: 2980,
      publisher: '本屋さん１'
    },
    {
      isbn: 2,
      title: '本２',
      price: 1500,
      publisher: '本屋さん２'
    },
    {
      isbn: 3,
      title: '本３',
      price: 980,
      publisher: '本屋さん３'
    }
  ]
}

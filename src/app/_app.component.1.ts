import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',

  template: `<div class="line back" [class.fore]="flag">
              <h1>{{ member.name }}</h1>
              <time (click)="show()">{{ date }}</time><br>
              <img [src]="image">
              <br>
              <br>
              <div>{{ msg }}</div>
              <br>
              <br>
              <div [innerHTML]="msg"></div>
              <br>
              <br>
              <div [innerHTML]="safeMsg"></div>
              <br>
              <br>
              <iframe [src]="safeUrl"></iframe>
              <br>
              <br>
              <div [attr.data-Test]="attr1">属性は[attr.〇〇]をつかう</div>
              <br>
              <br>
              <div id="main" (mousemove)="showPointer($event)" [style.background-color]="bg" [style.color]="c">
                <p>screen: {{ screenX }} x {{ screenY }}</p>
                <p>page  : {{ pageX }} x {{ pageY }}</p>
                <p>client: {{ clientX }} x {{ clientY }}</p>
                <p>offset: {{ offsetX }} x {{ offsetY }}</p>
              </div>
              <br>
              <br>
              <div>
                <form>
                  <label for="key">キー入力</label>
                  <input id="key" name="key" (keydown)="keydownInput($event)">
                </form>
                <div>キーコード: {{ which }}</div>
                <div [hidden]="!altKey">[alt]</div>
                <div [hidden]="!ctrlKey">[ctrl]</div>
                <div [hidden]="!shiftKey">[shift]</div>
              </div>
              <br>
              <br>
              <div>
                <form>
                  <label for="zip">郵便番号:</label>
                  <input id="zip" name="zip" type="text" size="10" (keypress)="mask($event)">
                </form>
              </div>
              <br>
              <br>
              <div id="outer" (click)="clickOuter()">outer
                <div id="inner" (click)="clickInner($event)">inner</div>
              </div>
              <br>
              <br>
              <div>
                <input #txt id="txt" name="txt" type="text" (input)="showInput(txt.value)">
                <ul [innerHTML]="list"></ul>
              </div>
              <br>
              <br>
              <div>
                <label>姓:<input #last type="text" (change)="0"></label><br>
                <label>名:<input #first type="text" (change)="0"></label>
                <p>こんにちは！ {{ last.value }}{{ first.value }}さん！</p>
              </div>
              <br>
              <br>
              <div>
                <input id="enter" name="enter" type="text" (keyup.enter)="showEnter($event)">
                <ul [innerHTML]="enterMsg"></ul>
              </div>
              <br>
              <br>


              <div>
                <form>
                  <label for="name">名前:</label>
                  <input id="name" name="name" type="text" [(ngModel)]="myName">
                  <div>こんにちは、{{ myName }}さん！</div>
                </form>
              </div>
              <br>
              <br>

              <div>
                <p>price: {{ price | currency: "JPY" }}</p>
                <p>title: {{ title | uppercase }}</p>
                <p>title: {{ title | lowercase }}</p>
                <p>title: {{ title | titlecase }}</p>
              </div>
              <br>
              <br>
              <div>
                <pre>{{ obj | json }}</pre>
              </div>
              <br>
              <br>
              <div>
                <ul>
                  <li>{{ iroha | slice: 3 }}</li>
                  <li>{{ iroha | slice: 3: 5 }}</li>
                  <li>{{ iroha | slice: 7 }}</li>
                  <li>{{ iroha | slice: -3 }}</li>
                  <li>{{ iroha | slice: -3: -2 }}</li>
                  <li>{{ iroha | slice: 10 }}</li>
                </ul>
              </div>
              <br>
              <br>
              <div>
                <ul>
                  <li>{{ tiri | slice: 2 }}</li>
                  <li>{{ tiri | slice: 2: 4 }}</li>
                  <li>{{ tiri | slice: 5 }}</li>
                  <li>{{ tiri | slice: -3 }}</li>
                  <li>{{ tiri | slice: -3: -2 }}</li>
                </ul>
              </div>
              <br>
              <br>

            </div>`,

  styles: [`
    .line { margin: 10px; border: solid 5px #aaa; }
    .back { background-color: #ccc; }
    .fore { color: #666; }
  `],
  
  styleUrls: [
    'app/app.component.css'
  ]
})
export class AppComponent  {
  // クラス
  flag = true;

  // Interpolation
  member = {
    name: 'Yuki Sakaguchi',
    age: 26
  }
  
  // プロパティバインディング
  image = 'http://www.wings.msn.to/image/wings.jpg';

  // HTMLはただの文字列としてバインディンされる
  // [innerHTML]="msg"としてやればタグとして認識される
  // （script, input, buttonはサニタイズされる）
  msg: string = `<script>alert("ようこそ");</script>
                <div style="font-size: 20px;">
                  <p>WINGSプロジェクト</p>
                </div>
                <a href="http://www.wings.msn.to/">web</a>
                <button>同意する</button>
                <input type="button" onclick="alert('OK');" value="クリック" />`;
  
  // script, input, buttonなどのサニタイズしないようにする
  // import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; を読み込む
  safeMsg: SafeHtml;

  // iframeは普通には使えない。エラーがでる
  url = 'http://www.wings.msn.to/';
  safeUrl: SafeResourceUrl;
    
  constructor(private sanitaizer: DomSanitizer) {
    // bypassSecurityTrustHtmlメソッドを通すことで、文字列を信頼し、
    // サニタイズなどのチェック、処理を行わなくなる。
    // セキュリティホールになりかねないので、気をつける
    this.safeMsg = sanitaizer.bypassSecurityTrustHtml(this.msg);

    // urlもこれで信頼させることができる
    this.safeUrl = sanitaizer.bypassSecurityTrustResourceUrl(this.url);

    // 他にも
    // bypassSecurityTrustScript
    // bypassSecurityTrustStyle
    // bypassSecurityTrustUrl
    // がある
  }

  // 属性は[attr.〇〇]を使う
  attr1 = 'sample';

  // スタイルは[style.〇〇]でかく
  bg = "#000";
  c = "white";

  // クリックイベント
  date: string = new Date().toLocaleString();
  show() {
    this.date = new Date().toLocaleString();
  }

  // マウスムーブイベント
  screenX = 0;
  screenY = 0;
  pageX = 0;
  pageY = 0;
  clientX = 0;
  clientY = 0;
  offsetX = 0;
  offsetY = 0;
  
  showPointer(e: any) {
    this.screenX = e.screenX;
    this.screenY = e.screenY;
    this.pageX = e.pageX;
    this.pageY = e.pageY;
    this.clientX = e.clientX;
    this.clientY = e.clientY;
    this.offsetX = e.offsetX;
    this.offsetY = e.offsetY;
  }

  // キーダウンイベント
  which = '';
  altKey = false;
  ctrlKey = false;
  shiftKey = false;

  keydownInput(e: any) {
    this.which = e.which;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
  }

  // デフォルトイベントの中止
  mask(e: any) {
    let k = e.which;
    
    if (!((k >= 48 && k <= 57) || k === 45 || k === 8 || k === 0)) {
      // 決められたコード以外はイベント本来の動作をキャンセル
      // 数字、バックスペース、デリート以外はキャンセル
      e.preventDefault();
    }
  }

  // イベントバブリングを中止
  clickOuter(e: any) {
    console.log('outerをクリックしました。');
  }
  clickInner(e: any) {
    e.stopPropagation(); // 親要素のイベントを中止
    console.log('innerをクリックしました。');
  }

  // 参照変数
  // タグには#txtを用意し、showInput(txt.value)を渡す
  list = '';
  showInput(input: string) {
    this.list += `<li>${input}</li>`;
  }

  // エンターイベント
  // よく使うのでAngularはエンターイベントを用意してくれている
  enterMsg = '';
  showEnter(e: any) {
    this.enterMsg += `<li>${e.target.value}</li>`;
  }


  // ここまで片方向バインディング
  // ---------------------------------------------------------------
  // ここから双方向バインディング

  // [] と () の組み合わせで[(ngModel)]で双方向
  myName = '山田'


  // ここから双方向バインディング
  // ---------------------------------------------------------------
  // ここからパイプ


  // 金額表示
  price = 1000;

  // case
  title = 'title title';
  
  // object -> json
  obj: any = {
    name: '名前',
    gender: 'man',
    age: 3,
    family: [ 'a', 'b' ],
    other: {
      test1: 111,
      test2: 222
    }
  }

  // slice
  iroha = 'いろはにほへと';
  tiri = [ 'ち', 'り', 'ぬ', 'る', 'を' ];
}

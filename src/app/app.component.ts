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
            </div>`,

  styles: [`
    .line { margin: 10px; border: solid 5px #aaa; }
    .back { background-color: #ccc; }
    .fore { color: #666; }
  `]
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

  // イベント
  date: string = new Date().toLocaleString();
  show() {
    this.date = new Date().toLocaleString();
  }

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

  // キー入力
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
}

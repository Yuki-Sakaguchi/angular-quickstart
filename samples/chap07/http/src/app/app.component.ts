import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers }  from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <form>
      <label for="name">名前：</label>
      <input id="name" name="name" type="text" [(ngModel)]="name" />
      <input type="button" (click)="onclick()" value="送信" />
    </form>
    <div>{{result}}</div>
  `,
})
export class AppComponent {
  name = '';
  result = '';

  constructor(private http: Http) { }

  onclick() {
    this.http.get('app/http.php', {
      params: { name: this.name }

    /*
    //  URLSearchParamsで渡す場合
    let ps = new URLSearchParams();
    ps.set('name', this.name);
    this.http.get('app/http.php', {
      params: ps
    */
    
    /*
    // POST による通信の場合
    let ps = new URLSearchParams();
    ps.set('name', this.name);    
    this.http.post('app/http.php', ps, {
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
    */

    /*  
    //JSON形式で送信     
    this.http.post('app/http.php', { name: this.name }, {
      headers: new Headers({ 'Content-Type': 'application/json' })
    */   

      }).subscribe(
      response => {
        this.result = response.text();
      },
      error => {
        this.result = `通信失敗：${error.statusText}`;
      }
    );
  }
}

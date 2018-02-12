import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form>
      <label for="key">キー入力：</label>
      <input id="key" name="key" (keydown)="show($event)" />
    </form>
    <div>キーコード：{{which}}</div>
    <div [hidden]="!altKey">［Alt］</div>
    <div [hidden]="!ctrlKey">［Ctrl］</div>
    <div [hidden]="!shiftKey">［Shift］</div>
  `
})
export class AppComponent {
  which = '';
  altKey = false;
  ctrlKey = false;
  shiftKey = false;

  show(e : any) {
    this.which = e.which;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
  }
}

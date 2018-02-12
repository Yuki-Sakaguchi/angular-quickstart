import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    JavaScript F/Wの代表としてよくあげられるのが
    <span myColored myBgcolor="#f0f">Angular</span>です。
    
    <!--コンポーネントのcolorプロパティをバインド-->
    <!--<span myColored [myBgcolor]="color">Angular</span>です。-->
    
    <!--文字列リテラルをバインド（JavaScript式なのでクォートで括る）-->
    <!--<span myColored [myBgcolor]="'#f0f'">Angular</span>です。-->

    <!--<span myColored="#f0f">Angular</span>です。-->
  `
})

export class AppComponent  {
  color = '#f0f';
}

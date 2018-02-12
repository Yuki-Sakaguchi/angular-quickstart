import { Component } from '@angular/core';

@Component({
  selector: 'my-event',
  template: `
    <div class="book">
      <h3>WINGSの書籍</h3>
      WINGSプロジェクトが手掛けた書籍の一覧です。ぜひ、ご覧ください。<br />
      <a href="http://www.wings.msn.to/index.php/-/A-08/">http://www.wings.msn.to/index.php/-/A-08/</a>
    </div>
  `,
  styleUrls: ['app/app.component.css']
})
export class BookComponent {
}

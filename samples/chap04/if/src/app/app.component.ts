import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form>
      <label for="show">表示／非表示：</label>
      <input id="show" name="show" type="checkbox"
        [(ngModel)]="show" />
    </form>
    <div *ngIf="show">
      <p>WINGSプロジェクトは、当初、ライター山田祥寛のサポート（検証・査読・校正作業）集団という位置づけで開始されたコミュニティでしたが、2002年12月にメンバを大幅に増強し、本格的な執筆者プロジェクトとして生まれ変わりました。</p>
      <p>その後、「基礎PHP」インプレス）の執筆を皮切りに、「Java PRESS」「Web+DB PRESS」（技術評論社）、「＠IT」（IT Media）、「CodeZine」（翔泳社）のような紙／ネットワークを問わず、広い媒体で実績を積んで、現在に至ります。</p>
      <p>2005年5月には「有限会社 WINGSプロジェクト」として法人化を果たし、ますます質の高い情報を読者の方々にお届けしてまいります。</p>
    </div>`
 
  /*
  // スタイルバインディングでdisplayスタイルプロパティを設定
  template: `
    <form>
      <label for="show">表示／非表示：</label>
      <input id="show" name="show" type="checkbox"
        [(ngModel)]="show" />
    </form>
    <div [style.display]="show ? 'inline' : 'none'">
    <p>WINGSプロジェクトは、当初、ライター山田祥寛のサポート（検証・査読・校正作業）集団という位置づけで開始されたコミュニティでしたが、2002年12月にメンバを大幅に増強し、本格的な執筆者プロジェクトとして生まれ変わりました。</p>
  <p>その後、「基礎PHP」インプレス）の執筆を皮切りに、「Java PRESS」「Web+DB PRESS」（技術評論社）、「＠IT」（IT Media）、「CodeZine」（翔泳社）のような紙／ネットワークを問わず、広い媒体で実績を積んで、現在に至ります。</p>
  <p>2005年5月には「有限会社 WINGSプロジェクト」として法人化を果たし、ますます質の高い情報を読者の方々にお届けしてまいります。</p>
    </div>`
  */

  /*
  // 条件式を満たさない場合の出力を指定
  template: `
    <form>
      <label for="show">表示／非表示：</label>
      <input id="show" name="show" type="checkbox" [(ngModel)]="show" />
    </form>
    <div *ngIf="show; else elseContent">
      <p>WINGSプロジェクトは、当初、ライター山田祥寛のサポート（検証・査読・校正作業）集団という位置づけで開始されたコミュニティでしたが、2002年12月にメンバを大幅に増強し、本格的な執筆者プロジェクトとして生まれ変わりました。</p>
      <p>その後、「基礎PHP」インプレス）の執筆を皮切りに、「Java PRESS」「Web+DB PRESS」（技術評論社）、「＠IT」（IT Media）、「CodeZine」（翔泳社）のような紙／ネットワークを問わず、広い媒体で実績を積んで、現在に至ります。</p>
      <p>2005年5月には「有限会社 WINGSプロジェクト」として法人化を果たし、ますます質の高い情報を読者の方々にお届けしてまいります。</p>
    </div>
    <ng-template #elseContent>
      <h3 style="color:Red">非表示中です。</h3>
    </ng-template>
  `   
  */

  /*
  // then...else句ですべての表示をテンプレート化
  template: `
    <form>
      <label for="show">表示／非表示：</label>
      <input id="show" name="show" type="checkbox" [(ngModel)]="show" />
    </form>
    <div *ngIf="show; then trueContent; else elseContent">
      この部分は無視される！
    </div>
    <ng-template #trueContent>
      <p>WINGSプロジェクトは、当初、ライター山田祥寛のサポート（検証・査読・校正作業）集団という位置づけで開始されたコミュニティでしたが、2002年12月にメンバを大幅に増強し、本格的な執筆者プロジェクトとして生まれ変わりました。</p>
      <p>その後、「基礎PHP」インプレス）の執筆を皮切りに、「Java PRESS」「Web+DB PRESS」（技術評論社）、「＠IT」（IT Media）、「CodeZine」（翔泳社）のような紙／ネットワークを問わず、広い媒体で実績を積んで、現在に至ります。</p>
      <p>2005年5月には「有限会社 WINGSプロジェクト」として法人化を果たし、ますます質の高い情報を読者の方々にお届けしてまいります。</p>
    </ng-template>
    <ng-template #elseContent>
      <h3 style="color:Red">非表示中です。</h3>
    </ng-template>
  `  
  */
})
export class AppComponent  {
  show = false;
}

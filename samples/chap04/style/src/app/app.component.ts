import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div [ngStyle]="style">
      <p>WINGSプロジェクトは、当初、ライター山田祥寛のサポート（検証・査読・校正作業）集団という位置づけで開始されたコミュニティでしたが、2002年12月にメンバを大幅に増強し、本格的な執筆者プロジェクトとして生まれ変わりました。</p>
      <p>その後、「基礎PHP」インプレス）の執筆を皮切りに、「Java PRESS」「Web+DB PRESS」（技術評論社）、「＠IT」（IT Media）、「CodeZine」（翔泳社）のような紙／ネットワークを問わず、広い媒体で実績を積んで、現在に至ります。</p>
      <p>2005年5月には「有限会社 WINGSプロジェクト」として法人化を果たし、ますます質の高い情報を読者の方々にお届けしてまいります。</p>
    </div>`
})
export class AppComponent  {
  style = {
    backgroundColor: '#f00',
    color: '#fff',
    fontWeight: 'bold',
    margin: '15px',
    padding: '15px'
  };
  
  /*
  style = {
    'background-color': '#f00',
    'color': '#fff',
    'font-weight': 'bold',
    'margin.px': 15,
    'padding.px' : 15
  };
  */ 
}



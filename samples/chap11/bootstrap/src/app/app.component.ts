import { Component } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap';

@Component({
  selector: 'my-app',
  template: `
    <accordion [closeOthers]="true">
    <!--<accordion>-->
      <accordion-group heading="改訂新版JavaScript本格入門"
        [isOpen]="true">
        <p>「ECMAScript 2015」による新記法はもちろん、基本からオブジェクト指向構文、Ajax、クライアントサイド開発まで詳しく解説しています。また、テスト、ドキュメンテーション、コーディング規約など現場で避けられない知識もしっかり押さえました。</p>
      </accordion-group>
      <accordion-group heading="はじめてのAndroidアプリ開発 第2版"
        [isDisabled]="true">
        <p>基礎から応用まで確実に学べるステップアップ方式です。Android 7対応で、開発環境の構築からビュー開発、インテント、データベース連携はもちろん、センサーやGPSといったハードウェアとの連携やサービス開発、アプリの公開手順など、情報満載です。</p>
      </accordion-group>
      <accordion-group heading="［改訂新版］Javaポケットリファレンス">
        <p>初版でのJava SE 6までの標準ライブラリに加え，Java SE 7や8で追加された機能も扱っています。逆引きで目的からすぐに探せて、サンプルで具体的な実装イメージをつかめます。</p>
      </accordion-group>
    </accordion>
  `,
  /*
  providers: [
    {
      provide: AccordionConfig,
      useFactory: () => {
        return Object.assign(new AccordionConfig(), { closeOthers: true });
      }
    }
  ]
  */
})
export class AppComponent { }

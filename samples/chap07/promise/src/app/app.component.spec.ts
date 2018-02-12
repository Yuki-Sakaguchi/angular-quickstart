import { AppComponent } from './app.component';
import { HatenaService} from './hatena.service';

import { FormsModule }  from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('非同期サービス依存コンポーネント', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: HatenaService;

  beforeEach(() => {
    let serviceStub = {
      requestGet(url: string) {
        return Promise.resolve({
          count: 5,
          bookmarks: [
            { user: 'yamada', comment: '' },
            { user: 'satoh', comment: 'comment1' },
            { user: 'ohashi', comment: '' },
            { user: 'tanabe', comment: 'comment2' },
            { user: 'gondo', comment: 'comment3' },
          ]
        });
      }
    };

    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AppComponent ],
    })
    .overrideComponent(AppComponent, {
      set: {
        providers:    [
          { provide: HatenaService, useValue: serviceStub }
        ]
      }
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    service = fixture.debugElement.injector.get(HatenaService);
  });

  it('whenStableを使ったテスト', async(() => {
    comp.onclick();
    fixture.detectChanges();

    let des = fixture.debugElement.queryAll(By.css('li'));
    expect(des.length).toEqual(0);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      des = fixture.debugElement.queryAll(By.css('li'));
      expect(des.length).toEqual(3);
    });
  })); 

  /*
  //akeAsync＋tick関数
  it('fakeAsync', fakeAsync(() => {
    comp.onclick();
    fixture.detectChanges();

    let des = fixture.debugElement.queryAll(By.css('li'));
    expect(des.length).toEqual(0);

    tick();

    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.css('li'));
    expect(des.length).toEqual(3);
  }));
  */
});
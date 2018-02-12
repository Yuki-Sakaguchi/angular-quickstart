import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', function () {
  let des: DebugElement[];
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
    })
    .compileComponents();
  }));

  /*
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
    })
    .compileComponents()
    .then((result) => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      des = fixture.debugElement.queryAll(By.css('tr'));
    });
  }));
  */

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
    });

  it('テーブルの行数を確認', () => {
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.css('tr'));
    expect(des.length).toEqual(6);
  });
});
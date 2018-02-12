import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router'
import { ArticleComponent } from './article.component';

import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('ArticleComponent', function () {
  let service: ActivatedRoute;
  let de: DebugElement;
  let comp: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(() => {
    let activatedRouteStub = {
      get params() {
        return Observable.of(
          { id: 108 }
        );
      }
    };

    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });


    fixture = TestBed.createComponent(ArticleComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(ActivatedRoute);
    //service = TestBed.get(ActivatedRoute);
  });

  it('<h1>要素のテキストを確認', () => {
    fixture.detectChanges();
    let h1 = de.nativeElement;
    expect(h1.textContent).toEqual('記事情報 No.108');
  });
});
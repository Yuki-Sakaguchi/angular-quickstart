import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
        /*
        providers: [
          { provide: ComponentFixtureAutoDetect, useValue: true }
        ]
        */
      });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('<h1>要素のテキストを確認', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i);
  });

  it('nameプロパティの変化を確認', () => {
    comp.name = 'JavaScript';
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/javascript/i);
  });
});
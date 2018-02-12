import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By }           from '@angular/platform-browser';

import { UseComponent } from './use.component';
import { UseService } from './use.service';

describe('UseComponent', function () {
  let service: UseService;
  let current: Date;
  let de: DebugElement;
  let comp: UseComponent;
  let fixture: ComponentFixture<UseComponent>;
  let spy: jasmine.Spy;

  beforeEach(() => {
    current = new Date(2017, 3, 1);
    TestBed.configureTestingModule({
      declarations: [ UseComponent ]
    })
    .overrideComponent(UseComponent, {
        set: {
          providers: [
            {
              provide: UseService,
              useFactory: () => {
                let svc = new UseService();
                spy = spyOn(svc, 'show')
                  .and.returnValue(current.toLocaleString());
                return svc; 
              }
            }
          ]
        }
    });

    fixture = TestBed.createComponent(UseComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('li'));
  });

  it('<li>要素のテキストを確認', () => {
    expect(spy.calls.any()).toEqual(true);
    expect(spy.calls.count()).toEqual(1);
    fixture.detectChanges();
    expect(de.nativeElement.textContent).
      toEqual('UseService：' + current.toLocaleString());
  });
});
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

  beforeEach(() => {
    current = new Date(2017, 3, 1);
    let serviceStub = {
      show() {
        return current.toLocaleString();
      }
    };

    TestBed.configureTestingModule({
      declarations: [ UseComponent ]
    }).
    overrideComponent(UseComponent, {
        set: {
          providers: [
            { provide: UseService, useValue: serviceStub }
          ]
        }
    });

    fixture = TestBed.createComponent(UseComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('li'));
    service = fixture.debugElement.injector.get(UseService);
  });

  it('<li>要素のテキストを確認', () => {
    fixture.detectChanges();
    expect(de.nativeElement.textContent).
      toEqual('UseService：' + current.toLocaleString());
  });
});
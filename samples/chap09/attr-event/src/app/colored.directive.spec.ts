import { Component }    from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColoredDirective } from './colored.directive';

@Component({
  selector: 'my-app',
  template: `
    <span [myColored]="color">Angular</span>です。
  `
})
export class ColoredTestComponent {
  color = '#ff00ff';
}

describe('ColoredDirective', function () {
  let de: DebugElement;
  let comp: ColoredTestComponent;
  let fixture: ComponentFixture<ColoredTestComponent>;

  let rgb2hex = (color: string) => {
    let conv = (num: string) => {
      let tmp = parseInt(num).toString(16);
      return tmp.length === 1 ? '0' + tmp : tmp;
    };
    let cs = color.replace('rgb(', '').replace(')', '').split(',');
    return `#${conv(cs[0])}${conv(cs[1])}${conv(cs[2])}`;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredTestComponent, ColoredDirective ]
    });

    fixture = TestBed.createComponent(ColoredTestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('span'));
    fixture.detectChanges();
  });

  it('mouseover', () => {
    de.triggerEventHandler('mouseenter', de.nativeElement);
    fixture.detectChanges();
    let s = de.nativeElement.style;
    expect(rgb2hex(s.backgroundColor)).toEqual('#ff00ff');
  });	
});

import { Directive, ElementRef } from '@angular/core';
//import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myColored]'
})
export class ColoredDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#cff';
  }

  /*
  // Renderer2クラスで書替
  constructor(el: ElementRef, renderer :Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#cff');
  }
  */
}

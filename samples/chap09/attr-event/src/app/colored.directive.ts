import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myColored]'
})
export class ColoredDirective {
  @Input('myColored') color = '#ffc';

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

  //イベントリスナーに値を引き渡す
  /*
  @HostListener('mouseenter', ['$event.target']) onmouseenter(span: any) {
    console.log(span);
    this.el.nativeElement.style.backgroundColor = this.color;
  }


  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
  */
}

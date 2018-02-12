import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myColored]'
})
export class ColoredDirective implements OnInit {
  @Input() myBgcolor = '#cff';
  //@Input('myColored') color = '#cff';

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.myBgcolor;
    //this.el.nativeElement.style.backgroundColor = this.color;
  }
}

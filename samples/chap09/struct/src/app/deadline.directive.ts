import { Directive, Input, OnChanges,
  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myDeadline]'
})
export class DeadlineDirective implements OnChanges {
  @Input('myDeadline') deadline = new Date();

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  ngOnChanges() {
    if (this.deadline.getTime() < (new Date()).getTime()) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

/*
//セッターを利用するコード
export class DeadlineDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }
  @Input('myDeadline')
  set deadline(date: Date) {
    if (date.getTime() < (new Date()).getTime()) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
*/  
}

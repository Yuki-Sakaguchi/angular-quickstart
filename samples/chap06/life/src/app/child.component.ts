import { Component, Input, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'my-child',
  template: `<div>現在時刻は{{time.toLocaleString()}}</div>`,
})
export class ChildComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
   @Input() time: Date; 

   constructor() {
    console.log('［child］constructor');
   }

  ngOnInit() {
    console.log('［child］ngOnInit');
  }

  ngOnChanges() {
    console.log('［child］ngOnChanges');
  }
  /*
  ngOnChanges(changes: SimpleChanges) {
    console.log('［child］ngOnChanges');
    for (let prop in changes) {
      let change = changes[prop];
      console.log(`${prop}：${change.previousValue} => ${change.currentValue}`);
    }
  }
  */

  ngDoCheck() {
    console.log('［child］ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('［child］ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('［child］ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('［child］ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('［child］ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('［child］ngOnDestroy');
  }
}
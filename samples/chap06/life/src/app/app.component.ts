import { Component, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <label>表示／非表示
        <input type="checkbox" (change)="onchange()" checked />
      </label>
    </div>
    <my-child [time]="current" *ngIf="show"></my-child>
  `,
})
export class AppComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  show = true;
  current = new Date();

  onchange() {
    this.show = !this.show;
    this.current = new Date();
  }

  constructor() {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

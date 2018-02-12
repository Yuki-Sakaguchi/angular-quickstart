import { Component, ViewChild } from '@angular/core'; 
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { EditComponent } from './edit.component';
import { Book } from './book';

describe('Input/Output Component', function () {
  let sample: Book;
  let comp: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditComponent ]
    });

    fixture = TestBed.createComponent(EditComponent);
    comp = fixture.componentInstance;
    sample = <Book> {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
      price: 2980,
      publisher: '技術評論社',
    };
    comp.item = sample;
    fixture.detectChanges();
  });

  it('ISBNコードの確認', () => {
    let de = fixture.debugElement.query(By.css('#isbn'));
    expect(de.nativeElement.textContent).toEqual(sample.isbn);
  });

  it('editedイベントの確認', () => {
    let updated: Book;
    let de = fixture.debugElement.query(By.css('form'));
    comp.edited.subscribe((b: Book) => {
      updated = b
    });
    de.triggerEventHandler('ngSubmit', null);
    expect(updated).toBe(comp.item);
  });
});
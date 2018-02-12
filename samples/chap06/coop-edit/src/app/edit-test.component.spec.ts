import { Component }    from '@angular/core'; 
import { FormsModule }  from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditComponent } from './edit.component';
import { Book } from './book';

@Component({
  selector: 'my-app',
  template: `
    <edit-book [item]="selected" (edited)="onedited($event)"></edit-book>
  `
})
export class EditTestComponent {
  selected = <Book> {
    isbn: '978-4-7741-8411-1',
    title: '改訂新版JavaScript本格入門',
    price: 2980,
    publisher: '技術評論社',
  };

  updated: Book;

  onedited(book: Book) {
    this.updated = book;
  }
}

describe('EditComponent', function () {
  let de: DebugElement;
  let comp: EditTestComponent;
  let fixture: ComponentFixture<EditTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditComponent, EditTestComponent ]
    });

    fixture = TestBed.createComponent(EditTestComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ISBNコードの確認', () => {
    let de = fixture.debugElement.query(By.css('#isbn'));
    expect(de.nativeElement.textContent).toEqual(comp.selected.isbn);
  });

  it('editedイベントの確認', () => {
    let de = fixture.debugElement.query(By.css('form'));
    de.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(comp.updated).toEqual(comp.selected);
  });
});
import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: "my-app",
  template: `
    <form>
      <input id="upfile" name="upfile"  type="file" #fl
        accept="image/*" (change)="upload(fl.files)" />
    </form>
  `
})
export class AppComponent {
  constructor(private http:Http) {}

  upload(list: any) {
    if (list.length <= 0) { return; }
    
    let f = list[0];
    let data = new FormData();
    data.append('upfile', f, f.name);

    this.http.post('app/upload.php', data)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
}
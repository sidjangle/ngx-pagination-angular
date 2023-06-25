import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagination';
  collection = [];
  p:any = 0
  constructor() {
    for (let i:number = 1; i <= 100; i++) {
      this.collection.push('item'+i as never);
    }
  }
}

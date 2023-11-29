import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSecret = true;
  logs = [];

  handleClick() {
    this.showSecret = !this.showSecret;
    this.logs.push(`${Date()} Button Clicked`);
  }
}

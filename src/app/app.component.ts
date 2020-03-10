import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apd-mock';

  // variables
  isMobile = false;

  toggleNav() {
    this.isMobile = !this.isMobile;
  }
}

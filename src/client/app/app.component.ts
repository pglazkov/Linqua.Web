import { Component } from '@angular/core';
import { AuthService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private af: AuthService) {
  }

  getUser() {
    return this.af.loggedInUser;
  }

  getIsLoggedIn() {
    return this.af.isLoggedIn;
  }

  logout() {
    return this.af.logout().then(r => {
      window.location.reload();
      return r;
    });
  }
}

